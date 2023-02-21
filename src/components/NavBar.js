import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const navigate = useNavigate();

  const onListClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAddCircleTextClick = useCallback(() => {
    navigate("/add-page");
  }, [navigate]);

  const onAccountCircleClick = useCallback(() => {
    navigate("/account-page");
  }, [navigate]);

  return (
    <div className={styles.navBar}>
      <button className={styles.list} onClick={onListClick}>
        list
      </button>
      <div className={styles.addCircle} onClick={onAddCircleTextClick}>
        add_circle
      </div>
      <button className={styles.accountCircle} onClick={onAccountCircleClick}>
        account_circle
      </button>
    </div>
  );
};

export default NavBar;
