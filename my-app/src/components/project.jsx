import React from "react";
import { Card, Col, Row, Typography } from "antd";
import "./css/projects.css"; // Import custom styles

const { Title, Text } = Typography;

function ProjectCard({ title, description, technologies }) {
  return (
    <Card
      className="project-card"
      title={<span className="project-title">{title}</span>}
      bordered={false}
      hoverable
    >
      <p>{description}</p>
      <p>
        <strong>Technologies:</strong> {technologies}
      </p>
    </Card>
  );
}

function Projects() {
  const projects = [
    {
      title: "Student and Teacher Management",
      description:
        "A system for managing student and teacher information, including schedules, grades, and profiles.",
      technologies: "Java",
    },
    {
      title: "Website for Selling Flowers",
      description:
        "An e-commerce website for selling flowers, featuring product listings, cart, and payment integration.",
      technologies: "Java, HTML, CSS, JavaScript, SQL Server",
    },
    {
      title: "Website for Selling Technology Products",
      description:
        "An online store for technology products with user authentication, product search, and order management.",
      technologies: "Java, HTML, CSS, JavaScript, SQL Server",
    },
    {
      title: "Website for Selling Toy Models",
      description:
        "A web application for selling toy models, built with a modern tech stack and database management.",
      technologies: "Java, HTML, CSS, JavaScript, Spring Boot, PostgreSQL",
    },
    {
      title: "Website Portfolio",
      description:
        "A personal portfolio website to showcase my projects and skills, built with a modern JavaScript framework.",
      technologies: "ReactJS",
    },
  ];

  return (
    <div className="projects-section">
      <header className="projects-header">
        <Title level={1}>My Projects</Title>
        <Text className="projects-header-text">
          A collection of projects showcasing my skills and expertise.
        </Text>
      </header>
      <div className="projects-container">
        <Row gutter={[24, 24]} justify="center">
          {projects.map((project, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6}>
              <ProjectCard
                title={project.title}
                description={project.description}
                technologies={project.technologies}
              />
            </Col>
          ))}
        </Row>
      </div>
      <footer className="projects-footer">
        <Text>© 2025 My Portfolio. All rights reserved.</Text>
      </footer>
    </div>
  );
}

export default Projects;
