import { useState } from "react";
import Button from "../Elements/Button";
import Input from "../Elements/Input";

export default function Todos({ saveTodo, slider }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    saveTodo(value);
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      {slider !== 2 && (
        <form id="input" className="input-todo" onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="add details"
            onChange={handleChange}
            value={value}
          />
          <Button className="add">Add</Button>
        </form>
      )}
    </>
  );
}
