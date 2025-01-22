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
npm start
```

### **Testing locally in a consuming project with Yalc**

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

### **Testing locally (or in QA!) in a consuming project with `npm pack`**
If you don't want to use Yalc, a quick alternative is to use `npm pack` and just install the tarball locally in the consuming project.

```
npm pack
```

This should have built a tarball (*.tgz) in your project which you can now copy over to the consuming project

```
cp ./some-file-name.tgz /path-to-consumer
```

Now just install that file from the consuming project's base directory

```
npm install ./some-file-name.tgz
```

From here, you can build your consuming project for local dev and if you commit both the tarball and the changes to `package.json`/`package-lock.json`, you'll be able to deploy to QA for a quick test!

## **Publishing**

*Important! Before executing the following steps, refer to the [Versioning guidelines](VERSIONING.md) for instructions on proper version numbering.*

First, ensure you have the `main` branch checked out and all of the yet-to-be-published changes are present.

```
git checkout main
```

Next, run `npm version` with the appropriate parameter based on the "versioning guidelines" referenced above. This should update the version listed in package.json, commit your change via git, and create a tag all in one.

```
npm version [major|minor|patch]
```

Next, prepare a new branch with a name resembling the new version:

```
git checkout -b release-x-x-x;
```

Next, move any of the changes annotated in `UNRELEASED.MD` over to `CHANGELOG.md` and commit the change

```
git commit -m "changelog"
```

Next, push the new branch (with your two commits) and the tag you created earlier up to the remote.

```
git push --follow-tags --set-upstream origin release-x-x-x
```

Next, from GitHub, follow the [instructions for creating a new release in GitHub](https://docs.github.com/en/github/administering-a-repository/managing-releases-in-a-repository#creating-a-release) using the tag that you just pushed. This will automatically trigger a GitHub Action which will build and publish the package to GitHub Packages, making it available to consuming projects.

Lastly, create a pull request for your release branch which will merge in the changes.
