# [FieldLevel Playbook](https://fieldlevel.design)

## **Installation**

Playbook can be added to a project by installing the private npm package, importing the CSS file and then importing the available React components. The Playbook library is currently exported as ES6 modules so the consuming project will need to transpile them to the correct target.

### **Authenticate with Azure Artifacts**

Install VSTS Auth helper:

```
npm install -g vsts-npm-auth --registry https://registry.npmjs.com --always-auth false
```

Create an `.npmrc` file in the root of your project with the following contents:

```
@fieldlevel:registry=https://pkgs.dev.azure.com/fieldlevel/_packaging/fieldlevel/npm/registry/
always-auth=true
```

Bootstrap local auth credentials (follow onscreen prompts):

```
vsts-npm-auth -config .npmrc
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
yarn dev
```

### **Testing locally in a consuming project**

You can use [Yalc](https://github.com/whitecolor/yalc) to properly build and "deploy" local changes to consuming projects. NOTE: `yarn link` and `npm link` won't work properly with Playbook.

Install Yalc:

```
npm install -g yalc
```

Build and deploy Playbook to the local Yalc store

```
yalc push
```

In the consuming project:

```
yalc add @fieldlevel/playbook
```

Any subsequent usage of `yalc push` will automatically update the package in the consuming project until you run:

```
yalc remove @fieldlevel/playbook
```

### **Publishing**

To publish a new version of Playbook run and increment the version number accordingly:

```
yarn publish
```

Refer to the [Versioning guidelines](VERSIONING.md) for proper versioning instructions.
