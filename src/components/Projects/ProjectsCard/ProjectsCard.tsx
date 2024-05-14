import { Project } from "@/data/interfaces";
import styles from "./ProjectsCard.module.scss";

export default function ProjectsCard({ project }: { project: Project }) {
  return (
    <div className={styles.ProjectsCard}>
      <h2>Project Name</h2>
      <p>Project Description</p>
    </div>
  );
}
