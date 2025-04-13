import React from 'react';

const EnglishToPersianNumber = ({ number }) => {
  const convertToPersian = (num) => {
    const persianNumbers = '۰۱۲۳۴۵۶۷۸۹';
    return num
      .toString()
      .split('')
      .map(digit => persianNumbers.charAt(digit))
      .join('');
  };

  return <span>{convertToPersian(number)}</span>;
};

export default EnglishToPersianNumber;
