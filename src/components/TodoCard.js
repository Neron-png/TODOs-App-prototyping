import styles from "./TodoCard.module.css";


const TodoCard = ({ todo, remove }) => {

  const handleClick = () => {
    remove(todo.id);
  }

  return (
    <div className={styles.todo01}>
      <div className={styles.frameDiv}>
        <b className={styles.todoTitle}>{todo.title}</b>
        <div className={styles.time}>
          <img className={styles.clockIcon} alt="" src="../clock.svg" />
          <p className={styles.p}>{todo.duedate}</p>
        </div>
      </div>
      <div className={styles.frameDiv1}>
        <button className={styles.edit}>
          <img className={styles.ellipseIcon} alt="" src="../ellipse-1.svg" />
          <img className={styles.vectorIcon} alt="" src="../vector.svg" />
          <img className={styles.vectorIcon1} alt="" src="../vector1.svg" />
        </button>
        <button className={styles.edit} onClick={handleClick}>
          <img className={styles.ellipseIcon} alt="" src="../ellipse-11.svg" />
          <img className={styles.vectorIcon2} alt="" src="../vector2.svg" />
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
