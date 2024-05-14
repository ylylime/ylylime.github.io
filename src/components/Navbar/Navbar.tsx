import { NavLink } from "@/data/interfaces";
import { useRef } from "react";
import styles from "./Navbar.module.scss";

// make sure to add navLinks and useRef to smooth scroll to sections

export default function Navbar({ navLinks }: { navLinks: NavLink[] }) {
  return (
    <nav className={styles.navbar}>
      <p>Navbar</p>
    </nav>
  );
}
