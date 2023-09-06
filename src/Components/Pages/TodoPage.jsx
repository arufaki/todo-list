import { useEffect, useState } from "react";
import Footer from "../Fragments/Footer";
import Header from "../Fragments/Header";
import List from "../Fragments/ListOfTodos";
import Navigation from "../Fragments/Navigation";
import Todos from "../Fragments/Todos";
import Main from "../Layouts/Main";

export default function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [slider, setSlider] = useState(0);

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todo-list")) || []);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("todo-list", JSON.stringify(todos));
  }, [todos]);

  const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;

  return (
    <>
      <Header />
      <Main>
        <section id="nav" className="nav-link">
          <Navigation
            slider={slider}
            currentSlider={(currentIndex) => setSlider(currentIndex)}
          />
        </section>
        <section className="todos">
          <Todos
            saveTodo={(todoText) => {
              const trimText = todoText.trim();

              if (trimText !== "") {
                setTodos([
                  ...todos,
                  { id: newId, todo: trimText, complete: false },
                ]);
              }
            }}
            slider={slider}
          />
          <List
            todos={todos}
            todoComplete={(currentTodo) => {
              const todoDone = todos.map((todo) => {
                if (todo === currentTodo) {
                  todo.complete = !todo.complete;
                }
                return todo;
              });
              setTodos(todoDone);
            }}
            slider={slider}
            setDeleteTodos={(deleteTodo) => {
              setTodos(deleteTodo);
            }}
            setDeleteAllTodos={(deleteAll) => {
              setTodos(deleteAll);
            }}
          />
        </section>
      </Main>
      <Footer />
    </>
  );
}
