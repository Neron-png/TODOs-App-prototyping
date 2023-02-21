import styles from "./AddButton.module.css";

const AddButton = ({ handleClick }) => {

  return (
    <button className={styles.frameButton} onClick = {handleClick}>
      <b className={styles.add}>Add</b>
    </button>
  );
};

export default AddButton;
