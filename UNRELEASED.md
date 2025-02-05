# Unreleased changes

See [the versioning guidelines](VERSIONING.md) for how to format entries.

### Breaking changes
- "Pass-through" dependencies which were previously unaccounted for and simply removed from the build have now been properly identified as Peer Dependencies, which could potentially break installation. [(#151)](https://github.com/FieldLevel/FieldLevelPlaybook/pull/151)
- Storybook has been upgraded to 8.5, which features new API's [(#151)](https://github.com/FieldLevel/FieldLevelPlaybook/pull/151)

### Enhancements

### Bug fixes

### Documentation

### Development workflow
- Rollup was replaced by Webpack for production builds [(#151)](https://github.com/FieldLevel/FieldLevelPlaybook/pull/151)

### Dependency upgrades
- Development builds are now using React 18 [(#151)](https://github.com/FieldLevel/FieldLevelPlaybook/pull/151)
- Typescript was upgraded to 5+ [(#151)](https://github.com/FieldLevel/FieldLevelPlaybook/pull/151)
- A variety of build-related packages attributable to Storybook and/or Webpack have been added/upgraded [(#151)](https://github.com/FieldLevel/FieldLevelPlaybook/pull/151)

### Code quality

### Deprecations
