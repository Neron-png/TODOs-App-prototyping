import NavBar from "../components/NavBar";
import Logotype from "../components/Logotype";
import styles from "./AccountPage.module.css";

const AccountPage = () => {
  return (
    <div className={styles.accountPage}>
      <NavBar />
      <Logotype tODOS="ACCOUNT" checkCircle="checkcircle.svg" />
    </div>
  );
};

export default AccountPage;
