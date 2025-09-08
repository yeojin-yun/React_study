/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

const tableBorder = css`
  border: 1px solid black;
  padding: 8px;
`;

function StateDetail() {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [budget, setBudget] = useState(100000);

  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
  const totalBudget = budget - totalPrice;

  const handleItem = (e) => {
    const input = e.target.value;
    setItem(input);
  };

  const handlePrice = (e) => {
    const input = e.target.value;
    setPrice(input);
  };

  const addItem = () => {
    if (item.trim()) {
      const newItem = {
        id: Date.now(),
        name: item,
        price: parseInt(price),
      };

      if (totalPrice + price <= budget) {
        setItems([newItem, ...items]);
        setItem("");
        setPrice("");
      } else {
        alert("예산을 초과했어요.");
      }
    }
  };
  return (
    <div
      css={css`
        padding: 16px;
      `}
    >
      <div
        css={css`
          background-color: wheat;
          padding: 16px;
          border-radius: 8px;
        `}
      >
        <h1>쇼핑 카트</h1>
        <label
          css={css`
            font-size: 20px;
          `}
        >
          예산
          <input
            css={css`
              font-size: 16px;
              margin-left: 4px;
              margin-right: 4px;
              margin-bottom: 16px;
            `}
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          ></input>
          원
        </label>

        <div>
          <input
            css={css`
              margin-right: 4px;
            `}
            type="text"
            placeholder="아이템"
            onChange={handleItem}
            value={item}
          ></input>
          <input
            css={css`
              margin-right: 4px;
            `}
            type="number"
            placeholder="가격"
            onChange={handlePrice}
            value={price}
          ></input>
          <button onClick={addItem}>추가</button>
        </div>

        <div>
          <h5>남은 예산 {totalBudget.toLocaleString()}원</h5>
        </div>

        {items.length > 0 && (
          <table
            css={css`
              border-collapse: collapse;
            `}
          >
            <thead>
              <tr>
                <th css={tableBorder}>id</th>
                <th css={tableBorder}>item</th>
                <th css={tableBorder}>price</th>
              </tr>
            </thead>
            <tbody>
              {items.map((e) => (
                <tr key={e.id}>
                  <td css={tableBorder}>{e.id}</td>
                  <td css={tableBorder}>{e.name}</td>
                  <td css={tableBorder}>{e.price.toLocaleString()}원</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div>
        <h1>TO DO LIST</h1>
      </div>
    </div>
  );
}

export default StateDetail;
