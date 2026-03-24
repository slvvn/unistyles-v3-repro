# Repro: Unistyles variants + `Animated.Text` + breakpoint-based style

## What goes wrong

- **Expected:** Primary button label stays **white** on the blue background after rotating the iOS simulator.
- **Actual (bug):** After rotation, the label can show **blue** text — the base `color` on the `label` style before variants — meaning variant resolution for the label is not applied correctly on native after a breakpoint/layout change.

## How to reproduce

1. Install deps and run on iOS.
2. Open the app and the index screen with the button on it will be shown.
3. Rotate the simulator from portrait to landscape.
4. Observe the label color changing to **blue**, while it should stay **white**.
5. Now comment out the style property in the parent that uses a breakpoint-based value (the `flex`).
6. Rotate the simulator from portrait to landscape.
7. Observe the label color correctly staying **white**.

## Suspected cause

It looks like it has something to do with this combination:

1. Having a parent with a breakpoint-based style (e.g. `flex: { md: 1 }`) in this case.
2. Having child with an **`Animated.Text`** inside it and applying variant-based style on it.

Doesn't happen with the normal React Native `Text` component.
