import Button from "../Elements/Button";
import Checkbox from "../Elements/Checkbox";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function List({
  todos,
  todoComplete,
  slider,
  setDeleteTodos,
  setDeleteAllTodos,
}) {
  const filterActive = todos.filter((todo) => todo.complete == false);

  const filterComplete = todos.filter((todo) => todo.complete == true);

  const removeTodo = (todoIndex) => {
    const deleteTodo = todos.filter((_, index) => index !== todoIndex);
    setDeleteTodos(deleteTodo);
  };

  const deleteAll = () => {
    setDeleteAllTodos(filterActive);
  };
  return (
    <div className="list-master">
      {slider === 0 &&
        todos.map((todo) => (
          <Checkbox
            key={todo.id}
            id={todo.todo}
            label={todo.todo}
            todo={todo}
            checked={todo.complete}
            onClick={() => {
              todoComplete(todo);
            }}
          />
        ))}
      {slider === 1 &&
        filterActive.map((todo) => (
          <Checkbox
            key={todo.id}
            id={todo.todo}
            label={todo.todo}
            todo={todo}
            checked={todo.complete}
            onClick={() => {
              todoComplete(todo);
            }}
          />
        ))}
      {slider === 2 && (
        <div className="complete-wrap">
          {filterComplete.map((todo, index) => (
            <div key={todo.id} className="complete-todo">
              <Checkbox
                id={todo.todo}
                label={todo.todo}
                todo={todo}
                checked={todo.complete}
                onClick={() => {
                  todoComplete(index);
                }}
              />
              <DeleteOutlineIcon
                className="delete-icon"
                onClick={() => removeTodo(index)}
              />
            </div>
          ))}
          <Button className="btn-removeAll" onClick={() => deleteAll()}>
            <DeleteOutlineIcon fontSize="small" />
            delete all
          </Button>
        </div>
      )}
    </div>
  );
}
