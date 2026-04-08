import React from 'react';

const BillingDetails = ({ data }) => (
  <div style={{ padding: '10px', border: '2px solid black' }}>
    <h3>Billing Summary</h3>
    <p>Product Name: {data.productName}</p>
    <p>Quantity: {data.quantity}</p>
    <p>Unit Price: ₱{data.unitPrice}</p>
    <p>
      <strong>Total Price: ₱{data.total}</strong>
    </p>
  </div>
);

export default BillingDetails;
