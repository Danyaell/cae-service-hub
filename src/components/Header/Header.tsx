import { MdOutlineMiscellaneousServices } from "react-icons/md";
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Navbar />
      <div>
        <MdOutlineMiscellaneousServices className={styles.icon}/>
        <h1 className={styles.title}>Sistema del CAE</h1>
        <p className={styles.subtitle}>CENTRO DE APOYO EXTRACURRICULAR</p>
      </div>
    </header>
  );
}
