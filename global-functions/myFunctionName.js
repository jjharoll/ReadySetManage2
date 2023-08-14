import React from 'react';

const myFunctionName = (totalPrice, amountPaid) => {
  const total = parseFloat(totalPrice);
  const paid = parseFloat(amountPaid);

  if (!isNaN(total) && !isNaN(paid)) {
    const remaining = total - paid;
    return remaining.toFixed(2);
  }

  return 'Invalid input';
};

export default myFunctionName;
