import { NavLink } from "@/data/interfaces";
import styles from "./Footer.module.scss";

export default function Footer({ navLinks }: { navLinks: NavLink[] }) {
  return (
    <footer className={styles.footer}>
      <p>Footer</p>
    </footer>
  );
}
