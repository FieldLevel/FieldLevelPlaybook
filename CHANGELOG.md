# Changelog

All notable changes to this project will be documented in this file.

The format is based on [the versioning guidelines](VERSIONING.md).

<!-- Unreleased changes should go to UNRELEASED.md -->

---

## 7.3.0 - 2025-10-17

### Enhancements

-   remove uppercase style from `Subheading` component ([#174](https://github.com/FieldLevel/FieldLevelPlaybook/pull/174))
-   add padding to `Modal` header ([#173](https://github.com/FieldLevel/FieldLevelPlaybook/pull/173))
-   set white background on `RadioButton` and `Checkbox` components ([#172](https://github.com/FieldLevel/FieldLevelPlaybook/pull/172))

## 7.2.1 - 2025-08-26

### Enhancements

-- update overlay of `Modal` component ([#170](https://github.com/FieldLevel/FieldLevelPlaybook/pull/170))

## 7.2.0 - 2025-07-31

### Enhancements

-   close `Feedback` component once `action` is clicked and require `onClick` in `action` prop ([#165](https://github.com/FieldLevel/FieldLevelPlaybook/pull/165))

-   Add large size and autoComplete to TextInput ([#166](https://github.com/FieldLevel/FieldLevelPlaybook/pull/166))

## 7.1.1 - 2025-07-29

### Bug fixes

-   set onClick on button when specified for action prop in `Feedback` component - ([#163](https://github.com/FieldLevel/FieldLevelPlaybook/pull/163))

## 7.1.0 - 2025-07-02

### Bug fixes

-   allow `Modal` tertiary button to appear without primary/secondary actions ([#160](https://github.com/FieldLevel/FieldLevelPlaybook/pull/160))
-   fix spacing on `Modal` footer to match body ([#159](https://github.com/FieldLevel/FieldLevelPlaybook/pull/159))

## 7.0.0 - 2025-03-14

### Breaking changes

-   More customization options for `Feedback` [(#156)](https://github.com/FieldLevel/FieldLevelPlaybook/pull/156)

### Enhancements

-   Adds support for advanced CSS configurations [(#153)](https://github.com/FieldLevel/FieldLevelPlaybook/pull/153)
-   Adds optional `persistent` mode to `Modal` [(#154)](https://github.com/FieldLevel/FieldLevelPlaybook/pull/154)
-   Updates the `CloseMajor` and `CloseMinor` icons [(#155)](https://github.com/FieldLevel/FieldLevelPlaybook/pull/155)

### Bug fixes

-   Removes duplicate type emittance [(#153)](https://github.com/FieldLevel/FieldLevelPlaybook/pull/153)

### Documentation

-   Adds documentation about implementing advanced CSS configurations [(#153)](https://github.com/FieldLevel/FieldLevelPlaybook/pull/153)
-   Adds annotation about our build process / webpack strategy [(#153)](https://github.com/FieldLevel/FieldLevelPlaybook/pull/153)

## 6.0.0 - 2025-02-05

### Breaking changes

-   "Pass-through" dependencies which were previously unaccounted for and simply removed from the build have now been properly identified as Peer Dependencies, which could potentially break installation. [(#151)](https://github.com/FieldLevel/FieldLevelPlaybook/pull/151)
-   Storybook has been upgraded to 8.5, which features new API's [(#151)](https://github.com/FieldLevel/FieldLevelPlaybook/pull/151)

### Development workflow

-   Rollup was replaced by Webpack for production builds [(#151)](https://github.com/FieldLevel/FieldLevelPlaybook/pull/151)

### Dependency upgrades

-   Development builds are now using React 18 [(#151)](https://github.com/FieldLevel/FieldLevelPlaybook/pull/151)
-   Typescript was upgraded to 5+ [(#151)](https://github.com/FieldLevel/FieldLevelPlaybook/pull/151)
-   A variety of build-related packages attributable to Storybook and/or Webpack have been added/upgraded [(#151)](https://github.com/FieldLevel/FieldLevelPlaybook/pull/151)

## 5.1.0 - 2025-01-29

### Enhancements

-   Remove extraneous references to `yarn` [#148](https://github.com/FieldLevel/FieldLevelPlaybook/pull/148)

-   Update critical and highlight colors - ([#149] (https://github.com/FieldLevel/FieldLevelPlaybook/pull/149))

### Documentation

-   Update local dev/publishing docs [#148](https://github.com/FieldLevel/FieldLevelPlaybook/pull/148)

## 5.0.1 - 2025-01-09

### Bug fixes

-   Re-introduce the 'prepare' script in package.json which is required for compilation of CSS assets

## 5.0.0 - 2025-01-09

### Breaking changes

-   Migrate from yarn v1+ -> npm 10.8.2 ([#145](https://github.com/FieldLevel/FieldLevelPlaybook/pull/145))

## 4.9.0 - 2024-11-25

### Enhancements

-   Change the max height of default and small variants in `Modal` - ([#143](https://github.com/FieldLevel/FieldLevelPlaybook/pull/143))
-   Add `Alert` component ([#142](https://github.com/FieldLevel/FieldLevelPlaybook/pull/142))

## 4.8.0 - 2024-10-08

### Enhancements

-   Disable autofocus in `Modal` component by default ([#139](https://github.com/FieldLevel/FieldLevelPlaybook/pull/139))

### Bug fixes

-   Fix width for small variant of `Modal` at medium breakpoint ([#138](https://github.com/FieldLevel/FieldLevelPlaybook/pull/138))

## 4.7.0 - 2024-06-27

### Enhancements

-   Wrap Link with React.forwardRef ([136](https://github.com/FieldLevel/FieldLevelPlaybook/pull/136))

## 4.6.0 - 2024-06-24

### Enhancements

-   Add onOpenAutoFocus prop to Modal to support equivalent prop in Radix/Dialog.Content ([134](https://github.com/FieldLevel/FieldLevelPlaybook/pull/134))

## 4.5.0 - 2024-05-08

### Enhancements

-   Remove @reach-ui from `Modal` and replace with @radix-ui alternative ([132](https://github.com/FieldLevel/FieldLevelPlaybook/pull/132))

## 4.4.0 - 2024-04-26

### Enhancements

-   Add `min`, `max`, and `step` props to `TextInput` component ([128](https://github.com/FieldLevel/FieldLevelPlaybook/pull/128))
-   Add `tertiaryButton` prop to `Modal` component ([#127](https://github.com/FieldLevel/FieldLevelPlaybook/pull/127))
-   Update spacing and label for `ChoiceGroup`, `Select`, and `TextInput` components ([#130](https://github.com/FieldLevel/FieldLevelPlaybook/pull/130))

### Documentation

-   Update docs to mark `Feedback` as released ([129](https://github.com/FieldLevel/FieldLevelPlaybook/pull/129))

## 4.3.0 - 2024-03-05

### Enhancements

-   Update font size on mobile for `TextInput` and `Select` components ([#124](https://github.com/FieldLevel/FieldLevelPlaybook/pull/124))
-   Update font size of `Modal` titles ([#123](https://github.com/FieldLevel/FieldLevelPlaybook/pull/123))
-   Add animation to `Feedback` component ([#122](https://github.com/FieldLevel/FieldLevelPlaybook/pull/122))
-   Update color definition for placeholder text ([#121](https://github.com/FieldLevel/FieldLevelPlaybook/pull/121))
-   Update the font weight for `font-bold` ([#120](https://github.com/FieldLevel/FieldLevelPlaybook/pull/120))

## 4.2.0 - 2023-11-16

### Enhancements

-   Add srcSet support on Logo
-   Add srcSet support on LazyImage
-   Add srcSet support on Avatar

### Bug fixes

-   Fix invalid aria role on LazyImage

### Development workflow

-   Ignore IntelliJ IDE project settings (.idea folder)

## 4.1.1 - 2023-10-31

### Enhancements

-   Remove unnecessary/invalid "role='img'" on `Logo` container ([#116](https://github.com/FieldLevel/FieldLevelPlaybook/pull/116))
-   Remove unnecessary/invalid "role='img'" on `Avatar` container ([#116](https://github.com/FieldLevel/FieldLevelPlaybook/pull/116))

## 4.1.0 - 2023-09-15

### Bug fixes

-   Fix issues with TextInput ([#112](https://github.com/FieldLevel/FieldLevelPlaybook/pull/112))
-   Fix issues with Button and Link ([#113](https://github.com/FieldLevel/FieldLevelPlaybook/pull/113))
-   Fix Modal focusing close button on open ([#114](https://github.com/FieldLevel/FieldLevelPlaybook/pull/114))

### Deprecations

-   Remove deprecated `multiline` prop from `TextInput` ([#112](https://github.com/FieldLevel/FieldLevelPlaybook/pull/112))

## 4.0.0 - 2023-08-29

### Dependency upgrades

-   Upgrade to React 17 and Node 18 ([#109](https://github.com/FieldLevel/FieldLevelPlaybook/pull/109))

## 3.2.0 - 2023-05-24

### Dependency upgrades

-   Upgrade Tailwind and add colors ([#102](https://github.com/FieldLevel/FieldLevelPlaybook/pull/102))

## 3.1.0 - 2022-12-07

### Enhancements

-   Update mobile Modal variant styles ([#96](https://github.com/FieldLevel/FieldLevelPlaybook/pull/96))

## 3.0.1 - 2022-10-17

### Bug fixes

-   Fix FormLayout typing to allow for null Items and Rows properly ([#82](https://github.com/FieldLevel/FieldLevelPlaybook/issues/82))

## 3.0.0 - 2022-10-17

### Breaking changes

-   Upgrade React and related dependencies ([#81](https://github.com/FieldLevel/FieldLevelPlaybook/pull/81))

### Enhancements

-   Add unstyled option to `Link` component ([#83](https://github.com/FieldLevel/FieldLevelPlaybook/pull/83))
-   Make `Modal` sizing more flexible ([#84](https://github.com/FieldLevel/FieldLevelPlaybook/pull/84))
-   Add secondary Button variant ([#85](https://github.com/FieldLevel/FieldLevelPlaybook/pull/85))
-   Add url to Button ([#86](https://github.com/FieldLevel/FieldLevelPlaybook/pull/86))
-   Allow Select placeholder re-select ([#87](https://github.com/FieldLevel/FieldLevelPlaybook/pull/87))

## 2.3.0 - 2022-09-01

### Enhancements

-   Add auto-grow functionality for multiline `TextInput` ([#70](https://github.com/FieldLevel/FieldLevelPlaybook/pull/70))

### Bug fixes

-   Fix vertical alignment of `TextInput` in multiline mode ([#74](https://github.com/FieldLevel/FieldLevelPlaybook/pull/74))
-   Make sure TextInput resizes properly when cleared or initialized ([#75](https://github.com/FieldLevel/FieldLevelPlaybook/pull/75))

## 2.2.0 - 2022-06-08

### Enhancements

-   Add ref prop to TextInput that attaches ref to the underlying html input/textarea element ([#62](https://github.com/FieldLevel/FieldLevelPlaybook/pull/62))

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
