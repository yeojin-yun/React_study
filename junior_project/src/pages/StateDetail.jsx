/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
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
            value={price.toLocaleString()}
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

      <TodoCompopnent></TodoCompopnent>
    </div>
  );
}

const FilterButton = styled.button`
  border-radius: 20px;
  /* border: 1px solid blue; */
  padding: 0px 8px;
  margin-right: 4px;
  margin-top: 8px;
  margin-bottom: 8px;
  border: none;
  background-color: ${(props) => (props.isActive ? "yellow" : "blue")};
  color: ${(props) => (props.isActive ? "black" : "white")};
`;

function TodoCompopnent() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const addItem = () => {
    if (todo.trim()) {
      const newItem = {
        id: Date.now(),
        name: todo,
        completed: false,
      };
      setTodos([...todos, newItem]);
      setTodo("");
    }
  };

  const handleFilter = (newFilter) => {
    console.log(todos);
    setFilter(newFilter);
  };

  const handleToggle = (id) => {
    const list = todos.map((e) =>
      e.id === id ? { ...e, completed: !e.completed } : e
    );

    setTodos([...list]);
  };

  return (
    <div>
      <h1>To Do List</h1>
      <div>
        <input
          type="text"
          placeholder="할 일"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        ></input>
        <button onClick={addItem}>추가</button>
      </div>
      <div>
        <FilterButton
          isActive={filter === "all"}
          onClick={() => handleFilter("all")}
        >
          all
        </FilterButton>
        <FilterButton
          isActive={filter === "active"}
          onClick={() => handleFilter("active")}
        >
          activce
        </FilterButton>
        <FilterButton
          isActive={filter === "completed"}
          onClick={() => handleFilter("completed")}
        >
          completed
        </FilterButton>
      </div>
      {todos.length > 0 && (
        <table
          css={css`
            border-collapse: collapse;
          `}
        >
          <thead>
            <tr>
              <th css={tableBorder}>to do</th>
              <th css={tableBorder}>completed</th>
            </tr>
          </thead>
          <tbody>
            {filteredTodos.map((item) => (
              <tr key={item.id}>
                <td css={tableBorder}>{item.name}</td>
                <td css={tableBorder}>
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={(e) => handleToggle(item.id)}
                  ></input>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StateDetail;
