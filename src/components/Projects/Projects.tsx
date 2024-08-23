import ProjectsCard from "./ProjectsCard/ProjectsCard";
import { Project } from "@/data/interfaces";
import ProjectsData from "@/data/projects.json";
import React from "react";
import styles from "./Projects.module.scss";

// map projects data to projects card

const Projects = React.forwardRef((_: any, ref: any) => {
  return (
    <section className={styles.Projects} ref={ref}>
      <h3 className={styles.projectTitle}>My Projects</h3>
      <div className={styles.cards}>
        {ProjectsData.map((project, index) => {
          return (
            <ProjectsCard project={project} key={index} />
          )
        })}
      </div>
    </section>
  );
});

export default Projects;
