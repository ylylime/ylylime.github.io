import Hero from "@/components/Hero/Hero";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects/Projects";
import ProjectsData from "@/data/projects.json";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects projects={ProjectsData} />
    </>
  );
}
