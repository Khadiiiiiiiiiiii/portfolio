import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./css/homeContent.css";

function HomeContent() {
  return (
    <div className="home-section d-flex vh-100">
      <div className="left col-md-6 p-0">
        <img
          src="./images/avt.jpg"
          alt="Avatar"
          className="img-fluid full-height-img"
        />
      </div>

      <div className="right col-md-6 d-flex flex-column justify-content-center align-items-start text-white px-5 bg-dark">
        <h1 className="display-4 fw-bold">
          MY <span className="line"></span>
          <br />
          PORTFOLIO
        </h1>
        <p className="mb-4">
          Hello, my name is <strong>Pham Kha Vy</strong> and the student code is <strong>CE182254</strong>. I’m currently a
          third-year student majoring in <strong>Software Engineering</strong>. I have a strong
          passion for technology and enjoy building applications that solve
          real-world problems. Throughout my academic journey, I’ve developed
          skills in programming, web development, and teamwork. I’m always eager
          to learn new technologies and take on challenges that help me grow as
          a future software engineer.
        </p>
        <div className="d-flex gap-3">
          <button className="explore-button px-4">Explore Now</button>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
