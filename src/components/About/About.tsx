import styles from "./About.module.scss";

// add title, description, personal image, and resume button

export default function About() {
  return (
    <section>
      <div className={styles.About}>
        <h1>My Portfolio</h1>
        <p>Simple and clean portfolio website</p>
      </div>
    </section>
  );
}
