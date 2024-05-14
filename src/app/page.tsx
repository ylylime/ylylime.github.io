import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects/Projects";
import ProjectsData from "@/data/projects.json";
import styles from "./page.module.scss";
import Contact from "@/components/Contact/Contact";

// need to add refs to the components

export default function Home() {
  return (
    <div className={styles.Home}>
      <About />
      <Skills />
      <Projects projects={ProjectsData} />
      <Contact />
    </div>
  );
}
