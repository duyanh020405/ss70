import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export default function Shopp() {
  const listShop = useSelector(state => state.handleChange);
  const [listCard, setListCard] = useState<any>([]);

  const addToCart = (id: number) => {
    const index = listCard.findIndex(item => item.id === id);
    
    if (index === -1) {
      setListCard([...listCard, { ...listShop[id], quantity: 1 }]); 
    } else {
      listCard[index].quantity++; 
    }
    localStorage.setItem("Card", JSON.stringify(listCard)); 
  }

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
   return e.target.value
  }

  return (
    <div>
      <h2>Shop</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>stt</th>
            <th>name</th>
            <th>info</th>
            <th>image</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {listShop.map((item: any, index: number) => (
            <tr key={item}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td style={{ position: "relative", width: 400 }}>{item.infor}</td>
              <td><img src={item.image} alt="" style={{ width: '250px', height: '100px', objectFit: 'cover' }} /></td>
              <td>
                <div>
                  <input type="number" onChange={handleChangeInput} style={{ position: "relative", width: 40 }} value={1} />
                  <button onClick={() => addToCart(item.index)}>Add to Cart</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
