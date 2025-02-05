function getLocalIdentForCSSModules(context, localIdentName, localName, options, loaderUtils) {
    const interpolatedName = loaderUtils.interpolateName(context, `Playbook-[name]__${localName}`, options);
    return interpolatedName.replace('.module', '');
}

module.exports = getLocalIdentForCSSModules;
