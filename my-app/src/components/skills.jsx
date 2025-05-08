import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/skills.css";

const skills = [
  { name: "C", icon: "/icons/c.png" },
  { name: "Java", icon: "/icons/java.png" },
  { name: "HTML", icon: "/icons/html.png" },
  { name: "CSS", icon: "/icons/css.png" },
  { name: "JavaScript", icon: "/icons/javascript.png" },
  { name: "ReactJS", icon: "/icons/react.png" },
  { name: "PostgreSQL", icon: "/icons/postgresql.png" },
  { name: "SQL Server", icon: "/icons/sqlserver.png" },
];

function Skills() {
  return (
    <div className="skills-section">
      <h2 className="text-center mb-5">My Skills</h2>
      <div className="container">
        <div className="row justify-content-center">
          {skills.map((skill, index) => (
            <div className="col-6 col-sm-4 col-md-3 mb-4" key={index}>
              <div className="skill-card text-center mt-3">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="skill-icon mb-2"
                />
                <p className="skill-name">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
