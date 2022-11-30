export const devices = [];
export function getDeviceNameByIdentifier(identifier) {
    return devices.find(d => d.id === identifier)?.device;
}
