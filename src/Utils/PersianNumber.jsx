import React from 'react';

function EnglishToPersianNumber  ({ number })  {
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
