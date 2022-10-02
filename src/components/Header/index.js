import styles from "./header.module.scss";
import { memo } from "react";

function Header() {
  return <header className={styles.header}></header>;
}

export default memo(Header);
