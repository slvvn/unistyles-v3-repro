/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require("fs");
const path = require("path");

const { withDangerousMod } = require("@expo/config-plugins");
const {
  mergeContents,
} = require("@expo/config-plugins/build/utils/generateCode");

const withDeploymentTargets = (config) =>
  withDangerousMod(config, [
    "ios",
    async (config) => {
      const podfile = path.join(
        config.modRequest.platformProjectRoot,
        "Podfile",
      );
      const podfileContents = fs.readFileSync(podfile, "utf8");

      const setDeploymentTarget = mergeContents({
        tag: "deployment-target",
        src: podfileContents,
        // eslint-disable-next-line no-secrets/no-secrets
        newSrc: `    installer.pods_project.targets.each do |target|
      target.build_configurations.each do |config|
        config.build_settings['IPHONEOS_DEPLOYMENT_TARGET'] = '16.0'
      end
    end`,
        anchor: /post_install do \|installer\|/i,
        offset: 1,
        comment: "#",
      });

      if (!setDeploymentTarget.didMerge) {
        console.error("Failed to set iOS deployment target");
        return config;
      }

      fs.writeFileSync(podfile, setDeploymentTarget.contents);

      return config;
    },
  ]);

module.exports = withDeploymentTargets;
