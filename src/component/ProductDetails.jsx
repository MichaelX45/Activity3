import React, { useState } from 'react';

const ProductDetails = ({ onCalculate, onReset }) => {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unitPrice, setUnitPrice] = useState('');

  const handleCalculate = () => {
    const qty = Number(quantity);
    const price = Number(unitPrice);
    onCalculate({
      productName: productName.trim(),
      quantity: qty,
      unitPrice: price,
      total: qty * price,
    });
  };

  const handleReset = () => {
    setProductName('');
    setQuantity('');
    setUnitPrice('');
    onReset();
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <div>
        <label>
          Product Name:
          <input
            type="text"
            placeholder="Product name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            style={{ marginLeft: '8px' }}
          />
        </label>
      </div>
      <div>
        <label>
          Quantity:
          <input
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            style={{ marginLeft: '8px' }}
          />
        </label>
      </div>
      <div>
        <label>
          Unit Price:
          <input
            type="number"
            placeholder="Unit price"
            value={unitPrice}
            onChange={(e) => setUnitPrice(e.target.value)}
            style={{ marginLeft: '8px' }}
          />
        </label>
      </div>
      <div style={{ marginTop: '12px' }}>
        <button onClick={handleCalculate} style={{ marginRight: '8px' }}>
          Calculate
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default ProductDetails;
