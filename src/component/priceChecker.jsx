import React, { useState, useEffect } from 'react';
import ProductDetails from './ProductDetails';
import BillingDetails from './billingDetails';

const PriceChecker = () => {
  const [bill, setBill] = useState(null);

  useEffect(() => {
    document.title = 'Price Checker';
  }, []);

  return (
    <div>
      <h2>Price Checker</h2>
      <ProductDetails
        onCalculate={(data) => setBill(data)}
        onReset={() => setBill(null)}
      />
      {bill && <BillingDetails data={bill} />}
    </div>
  );
};

export default PriceChecker;
