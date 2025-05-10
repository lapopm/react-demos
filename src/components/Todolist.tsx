import { useState } from "react";

const Todolist = () => {
  const [list, setList] = useState([]);

  const [inputValue, setInputValue] = useState();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setList([...list, inputValue]);
      setInputValue("");
    }
  };

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {list.map((i, index) => (
          <li key={index}>{i}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input value={inputValue} type="text" onChange={handleChange}></input>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default Todolist;
