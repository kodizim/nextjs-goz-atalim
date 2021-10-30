import styles from "../styles/Layout.module.css";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
}
