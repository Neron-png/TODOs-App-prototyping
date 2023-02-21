import styles from "./TodoList.module.css";
import TodoCard from "./TodoCard";
import { useState, useEffect } from "react";


const TodoList = () => {

  var [todos, setTodos] = useState([])

  useEffect(() => {
    const todos_in_storage = JSON.parse(localStorage.getItem("TODOS_STORAGE"))
    if (todos_in_storage) setTodos(todos_in_storage);
  }, [])

  useEffect(() => {

    localStorage.setItem("TODOS_STORAGE", JSON.stringify(todos))

  }, [todos])
  
  const removeTodo = (id) => {

      const newTodos = todos.filter(todo => id != todo.id)
      setTodos(newTodos);
  
  }

    return (
        <div className={styles.TodoList}>
          {todos.map( todo => {
            return <TodoCard key={todo.id} todo={todo} remove={removeTodo}/>
          })}
        <div className={styles.frameDiv} id="spacer" />
        <div className={styles.frameDiv} id="spacer" />
      </div>
    );
  };
  
  export default TodoList;
  