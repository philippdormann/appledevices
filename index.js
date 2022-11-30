const devices = [];
function getDeviceNameByIdentifier(identifier) {
    return devices.find(d => d.identifier === identifier);
}
exports.getDeviceNameByIdentifier = getDeviceNameByIdentifier;