# Changelog

All notable changes to this project will be documented in this file.

The format is based on [the versioning guidelines](VERSIONING.md).

<!-- Unreleased changes should go to UNRELEASED.md -->

---

## 2.2.0 - 2022-06-08

### Enhancements

-   Add ref prop to TextInput that attaches ref to the underlying html input/textarea element ([#62] (https://github.com/FieldLevel/FieldLevelPlaybook/pull/62))

## 2.1.0 - 2022-05-04

### Enhancements

-   Add two new minor icons, email and information ([#59](https://github.com/FieldLevel/FieldLevelPlaybook/pull/59))

## 2.0.0 - 2022-03-24

### Breaking changes

-   Change tailwind breakpoint names ([#56](https://github.com/FieldLevel/FieldLevelPlaybook/pull/56))

### Enhancements

-   Add "loose" spacing option for `ChoiceGroup` ([#50](https://github.com/FieldLevel/FieldLevelPlaybook/pull/50))
-   Add `fullWidth` to `Button` and `vertical` to `ButtonGroup` ([#49](https://github.com/FieldLevel/FieldLevelPlaybook/pull/49))

## 1.5.0 - 2022-01-12

### Enhancements

-   Add destructive action option to `Modal` component ([#43](https://github.com/FieldLevel/FieldLevelPlaybook/pull/43))
-   Add title prop to `Avatar`, `Logo`, and `LazyImage` ([#36](https://github.com/FieldLevel/FieldLevelPlaybook/pull/36))
-   Add target prop to Link component. Update onClick signature to include optional event parameters. ([#37](https://github.com/FieldLevel/FieldLevelPlaybook/pull/37))
-   Update text-success color ([#45](https://github.com/FieldLevel/FieldLevelPlaybook/pull/45))

### Documentation

-   Remove unnecessary usage of useCallback in doc examples ([#42](https://github.com/FieldLevel/FieldLevelPlaybook/pull/42))

## 1.4.0 - 2021-11-01

### Enhancements

-   Update the Logo and Avatar components to support lazy loading ([#27](https://github.com/FieldLevel/FieldLevelPlaybook/pull/27))
-   Add onClick event handler to Link component ([#29](https://github.com/FieldLevel/FieldLevelPlaybook/pull/29))
-   Add distribute to ButtonGroup component ([#30](https://github.com/FieldLevel/FieldLevelPlaybook/pull/30))

## 1.3.0 - 2021-09-21

### Enhancements

-   Fix button border sizing ([#23](https://github.com/FieldLevel/FieldLevelPlaybook/pull/23))

### Development workflow

-   Include bullpen in tailwind watch files for storybook ([#21](https://github.com/FieldLevel/FieldLevelPlaybook/pull/21))

## 1.2.0 - 2021-07-02

### Breaking changes

-   Make default button type "button" and add submit prop ([#17](https://github.com/FieldLevel/FieldLevelPlaybook/pull/17))

### Enhancements

-   Add alt prop to Avatar and Logo ([#18](https://github.com/FieldLevel/FieldLevelPlaybook/pull/18))
-   Add a large variant to Modal ([#19](https://github.com/FieldLevel/FieldLevelPlaybook/pull/19))

### Bug fixes

-   Allow null/undefined children in Stack ([#16](https://github.com/FieldLevel/FieldLevelPlaybook/pull/16))

### Documentation

-   Add guidance copy to documentation ([#10](https://github.com/FieldLevel/FieldLevelPlaybook/pull/10))

### Dependency upgrades

-   Upgrade to Storybook 6.2.9 and PostCSS 8 ([#11](https://github.com/FieldLevel/FieldLevelPlaybook/pull/11))
-   Upgrade Tailwind to 2.2.4 and enable JIT mode ([#12](https://github.com/FieldLevel/FieldLevelPlaybook/pull/12))

## 1.1.0 - 2021-04-14

### Enhancements

-   Add ability for `Select` to accept either an array of string or Options [#2](https://github.com/FieldLevel/FieldLevelPlaybook/pull/2)

-   Add ability for `ChoiceGroup` to accept either an array or single value for selected prop [#4](https://github.com/FieldLevel/FieldLevelPlaybook/pull/4)

### Bug fixes

-   Fix controlled/uncontrolled React error when setting placeholder in `Select` [#1](https://github.com/FieldLevel/FieldLevelPlaybook/pull/1) [#5](https://github.com/FieldLevel/FieldLevelPlaybook/pull/5)

-   Filter out null from RowChildren array in `FormLayout.Row` [#3](https://github.com/FieldLevel/FieldLevelPlaybook/pull/3)

-   Filter out null children from `Card` [#6](https://github.com/FieldLevel/FieldLevelPlaybook/pull/6)

## 1.0.0 - 2021-03-03

### Enhancements

-   Created the initial core Playbook components and configuration
