import React, { useState, useEffect } from 'react';

export default function Cart() {
  const [listCard, setListCard] = useState<any[]>([]);

  useEffect(() => {
    const storedCard = localStorage.getItem("Card");
    if (storedCard) {
      setListCard(JSON.parse(storedCard));
    }
  }, []);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    const updatedListCard = listCard.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setListCard(updatedListCard);
    localStorage.setItem("Card", JSON.stringify(updatedListCard));
  };

  const handleRemoveItem = (id: number) => {
    const updatedListCard = listCard.filter(item => item.id !== id);
    setListCard(updatedListCard);
    localStorage.setItem("Card", JSON.stringify(updatedListCard));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {listCard.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <table border={1}>
          <thead>
            <tr>
              <th>stt</th>
              <th>name</th>
              <th>info</th>
              <th>image</th>
              <th>quantity</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {listCard.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td style={{ position: "relative", width: 400 }}>{item.infor}</td>
                <td>
                  <img src={item.image} alt="" style={{ width: '250px', height: '100px', objectFit: 'cover' }} />
                </td>
                <td>
                  <input 
                    type="number" 
                    value={item.quantity} 
                    min="1"
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                    style={{ width: 50 }} 
                  />
                </td>
                <td>
                  <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
