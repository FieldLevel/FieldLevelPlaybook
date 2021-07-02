# Changelog

All notable changes to this project will be documented in this file.

The format is based on [the versioning guidelines](VERSIONING.md).

<!-- Unreleased changes should go to UNRELEASED.md -->

---

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
