import NavBar from "../components/NavBar";
import AddForm from "../components/AddForm";
import Logotype from "../components/Logotype";
import styles from "./AddPage.module.css";

const AddPage = () => {
  return (
    <div className={styles.addPage}>
      <NavBar />
      <AddForm />
      <Logotype tODOS="ADD" checkCircle="../checkcircle.svg" />
    </div>
  );
};

export default AddPage;
