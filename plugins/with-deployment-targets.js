/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require("fs");
const path = require("path");

const { withDangerousMod } = require("@expo/config-plugins");
const {
  mergeContents,
} = require("@expo/config-plugins/build/utils/generateCode");

const IOS_DEPLOYMENT_TARGET = "16.0";

const withDeploymentTargets = (config) =>
  withDangerousMod(config, [
    "ios",
    async (config) => {
      const iosRoot = config.modRequest.platformProjectRoot;

      // 1. Set deployment target for all Pods in Podfile post_install
      const podfile = path.join(iosRoot, "Podfile");
      const podfileContents = fs.readFileSync(podfile, "utf8");

      const setDeploymentTarget = mergeContents({
        tag: "deployment-target",
        src: podfileContents,
        newSrc: `    installer.pods_project.targets.each do |target|
      target.build_configurations.each do |config|
        config.build_settings['IPHONEOS_DEPLOYMENT_TARGET'] = '${IOS_DEPLOYMENT_TARGET}'
      end
    end`,
        anchor: /post_install do \|installer\|/i,
        offset: 1,
        comment: "#",
      });

      if (!setDeploymentTarget.didMerge) {
        console.error("Failed to set iOS deployment target in Podfile");
        return config;
      }

      fs.writeFileSync(podfile, setDeploymentTarget.contents);

      // 2. Set deployment target for the main app target in project.pbxproj
      const xcodeprojDir = fs
        .readdirSync(iosRoot)
        .find((name) => name.endsWith(".xcodeproj"));
      if (xcodeprojDir) {
        const pbxprojPath = path.join(
          iosRoot,
          xcodeprojDir,
          "project.pbxproj",
        );
        if (fs.existsSync(pbxprojPath)) {
          let pbxproj = fs.readFileSync(pbxprojPath, "utf8");
          pbxproj = pbxproj.replace(
            /IPHONEOS_DEPLOYMENT_TARGET = \d+\.\d+;/g,
            `IPHONEOS_DEPLOYMENT_TARGET = ${IOS_DEPLOYMENT_TARGET};`,
          );
          fs.writeFileSync(pbxprojPath, pbxproj);
        }
      }

      return config;
    },
  ]);

module.exports = withDeploymentTargets;
