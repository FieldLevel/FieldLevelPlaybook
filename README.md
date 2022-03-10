# [FieldLevel Playbook](https://fieldlevel.design)

## **Installation**

Playbook can be added to a project by installing the npm package, importing the CSS file and then importing the available React components. The Playbook library is currently exported as ES6 modules so the consuming project will need to transpile them to the correct target if necessary.

### **Authenticate with GitHub Packages**

Create a [GitHub PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) with `repo` and `read:packages` scope.

Authenticate with the GitHub Package Registry using your PAT:

```
npm login --registry=https://npm.pkg.github.com --scope=@fieldlevel
```

Create an `.npmrc` file in the root of your project with the following contents:

```
@fieldlevel:registry=https://npm.pkg.github.com
```

### **Install NPM Package**

```
npm install @fieldlevel/playbook --save
```

or

```
yarn add @fieldlevel/playbook
```

### **Usage**

Import the Playbook CSS into the project:

```
import '@fieldlevel/playbook/dist/index.css'
```

Import and use a component:

```
import { Card, Button } from '@fieldlevel/playbook';

const CardWithButton = () => (
    <Card>
        <Button>Click me!</Button>
    </Card>
);
```

## **Development**

Storybook is used to develop new Playbook components in a sandboxed environment. The `/bullpen/Bullpen.tsx` file can be used to locally iterate on components, but changes to this file shouldn't be committed to any final PRs.

### **Local development**

Start Storybook:

```
yarn start
```

### **Testing locally in a consuming project**

You can use [Yalc](https://github.com/whitecolor/yalc) to properly build and "deploy" local changes to consuming projects. NOTE: `yarn link` and `npm link` won't work properly with Playbook.

Install Yalc:

```
npm install -g yalc
```

Build and deploy Playbook to the local Yalc store

```
yalc publish
```

In the consuming project:

```
yalc add @fieldlevel/playbook
```

Any subsequent usage of `yalc publish` will build and update the package in the consuming project until you run:

```
yalc remove @fieldlevel/playbook
```

### **Publishing**

Refer to the [Versioning guidelines](VERSIONING.md) for instructions on proper version numbering.

To publish a new version of Playbook run and increment the version number accordingly:

```
yarn version
```

Then push the new commit including tags:

```
git push --follow-tags
```

Finally, follow the [instructions for creating a new release in GitHub](https://docs.github.com/en/github/administering-a-repository/managing-releases-in-a-repository#creating-a-release) using the tag that you just pushed. A GitHub Action will execute that builds and publishes the package to GitHub Packages.
