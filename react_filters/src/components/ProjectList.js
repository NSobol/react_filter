import React from "react";
import propTypes from "prop-types";

function ProjectList(props) {
  const { projects } = props;

  return (
    <ul className="project-list">
      {projects.map((project, index) => {
        return (
          <li className="project-list-item" key={index}>
            <img src={project.img} alt={"project.category"} />
          </li>
        );
      })}
    </ul>
  );
}

ProjectList.propTypes = {
  projects: propTypes.array,
};
export default ProjectList;
