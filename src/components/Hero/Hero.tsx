import styles from "./Hero.module.scss";

// add title, description, personal image, and resume button

export default function Hero() {
  return (
    <section>
      <div className={styles.hero}>
        <h1>My Portfolio</h1>
        <p>Simple and clean portfolio website</p>
      </div>
    </section>
  );
}
