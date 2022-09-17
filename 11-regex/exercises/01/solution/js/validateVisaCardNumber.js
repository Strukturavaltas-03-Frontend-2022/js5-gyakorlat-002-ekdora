const visaRegexp = /^[4]\d{15}$/;

const validateVisaCardNumber = (visaNumber) => {
    return visaRegexp.test(visaNumber);
}

export default validateVisaCardNumber;