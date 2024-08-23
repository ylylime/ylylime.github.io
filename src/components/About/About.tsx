import React from "react";
import Image from "next/image";
import styles from "./About.module.scss";

// add title, description, personal image, and resume button

const About = React.forwardRef((_: any, ref: any) => {
  return (
    <section className={styles.About} ref={ref}>
      <div className={styles.words}>
      <h1>Hello, my name is Emily</h1>
      <p>Welcome to my portfolio!</p>
      <a className={styles.resume} href="/resume.pdf" target="_blank"> Resume</a>
      </div>
      <Image className={styles.pic}
      src="/ex.png"
      height={500}
      width={500}
      alt="picture"></Image>
    </section>
  );
});

export default About;
