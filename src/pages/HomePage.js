import TodoCard from "../components/TodoCard";
import NavBar from "../components/NavBar";
import Logotype from "../components/Logotype";
import styles from "./HomePage.module.css";
import TodoList from "../components/TodoList";
import React, { useState } from "react";
import { useEffect } from "react";


const HomePage = () => {

  
  
  // setTodos(prevState => [...prevState, {id: 13, title: "new", duedate:"22/12/2022"}])

  return (
    <div className={styles.homePage}>
      <TodoList/>
      {/* <TodoList/> */}
      <NavBar />
      <Logotype tODOS="TODOS" checkCircle="checkcircle.svg" />
    </div>
  );
};

export default HomePage;
