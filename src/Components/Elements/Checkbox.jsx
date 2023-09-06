import Input from "./Input";

export default function Checkbox({ label, id, onClick, checked, todo }) {
  return (
    <div className="todo-text">
      <Input
        type="checkbox"
        id={id}
        checked={checked}
        onClick={onClick}
        readOnly
      />
      <label htmlFor={id} className={todo.complete ? "todo-done" : null}>
        {label}
      </label>
    </div>
  );
}
