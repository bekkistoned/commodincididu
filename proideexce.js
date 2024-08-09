function getMarkPropOrConfig(property, markDef, config) {
    // Check if the property exists in markDef and return it
    if (markDef && markDef.hasOwnProperty(property)) {
        return markDef[property];
    }
    // Otherwise, fall back to the global config
    if (config && config.hasOwnProperty(property)) {
        return config[property];
    }
    // Default return value if neither has the property
    return null;
}
