const MACRegexp = /^(([0-9]|[A-F]){2}-){5}([0-9]|[A-F]){2}$/;

const validateMACAddress = (MACAddress) => {
    return MACRegexp.test(MACAddress);
};

export default validateMACAddress;
