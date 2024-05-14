import React from "react";
import styles from "./Skills.module.scss";

// add custom logos for languages and tools from react-icons

const Skills = React.forwardRef((_: any, ref: any) => {
  return (
    <section className={styles.Skills} ref={ref}>
      skills
    </section>
  );
});

export default Skills;
