import styles from "./index.module.scss";
import { memo } from "react";
import { Button } from "antd";

function ButtonCustom({ name, onClick }) {
  return (
    <Button className={styles.button} size={"large"} onClick={onClick}>
      🎉 {name}
    </Button>
  );
}

export default memo(ButtonCustom);
