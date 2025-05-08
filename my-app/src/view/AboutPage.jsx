import React from "react";
import Header from "../components/header";
import Certificate from "../components/certificate";

function AboutPage() {
  return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-md-12">
            <Certificate />
          </div>
        </div>
      </div>
  );
}

export default AboutPage;
