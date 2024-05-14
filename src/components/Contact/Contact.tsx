import React from "react";
import styles from "./Contact.module.scss";

// have social media icons & links + copyright

const Contact = React.forwardRef((_: any, ref: any) => {
  return (
    <section className={styles.Contact} ref={ref}>
      <p>Contact</p>
    </section>
  );
});

export default Contact;
