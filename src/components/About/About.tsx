import React from "react";
import Image from "next/image";
import styles from "./About.module.scss";

// add title, description, personal image, and resume button

const About = React.forwardRef((_: any, ref: any) => {
  return (
    <section className={styles.About} ref={ref}>
      <h1>My Portfolio</h1>
      <p>Simple and clean portfolio website</p>
    </section>
  );
});

export default About;
