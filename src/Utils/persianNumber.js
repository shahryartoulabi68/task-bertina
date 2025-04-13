
export function persianNumber(number) {
    const formattedNumber = number.toLocaleString('en-US');

    const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
    const persianNumber = formattedNumber.replace(/\d/g, (digit) => persianDigits[digit]);

    return persianNumber;
}

