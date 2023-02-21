import "antd/dist/antd.min.css";
import { Input, DatePicker} from "antd";
import AddButton from "../components/AddButton";
import styles from "./AddForm.module.css";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import {v4} from "uuid";




const AddForm = () => {

  let TodoTitleRef = null
  let TodoDateRef = null

  const handleSubmit = (e) => {
    e.preventDefault()
  
    if (!TodoTitleRef) return
    if (!TodoDateRef) return
    console.log(TodoTitleRef)
    console.log(TodoDateRef)

    const todos_in_storage = JSON.parse(localStorage.getItem("TODOS_STORAGE"))
    let newTodos = null
    if (!todos_in_storage) {
      newTodos = [{id: v4(), title: TodoTitleRef, duedate:TodoDateRef}]
    }
    else {
      newTodos = [...todos_in_storage, {id: v4(), title: TodoTitleRef, duedate:TodoDateRef}]
    }

    console.log(newTodos)

    localStorage.setItem("TODOS_STORAGE", JSON.stringify(newTodos))

    returnToHome()
  }

  const navigate = useNavigate()

  const returnToHome = useCallback(() => {
    navigate("/");  
  }, [navigate])

  return (
    <form className={styles.addForm}>
      <div className={styles.frameDiv}>
        <b className={styles.title}>Title</b>
        <Input
          className={styles.inputDefault}
          type="text"
          size="middle"
          placeholder="TODO Title"
          allowClear
          onChange={(e) => {
            TodoTitleRef = e.currentTarget.value
          } }
        />
      </div>
      <div className={styles.frameDiv}>
        <b className={styles.dueDate}>Due Date</b>
        <DatePicker
          className={styles.datePickerBasic}
          picker="date"
          size="middle"
          placeholder="Due Date"
          allowClear={false}
          onChange={(e) => {
            TodoDateRef = e.format('DD/MM/YYYY')
          } }
        />
      </div>
      <AddButton handleClick={handleSubmit}/>
    </form>
  );
};

export default AddForm;

