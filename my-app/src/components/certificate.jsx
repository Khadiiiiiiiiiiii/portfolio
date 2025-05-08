import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/certificate.css";

const certificates = [
  {
    title: "Software Development Lifecycle",
    issuer: "Coursera",
    date: "September 9, 2024",
    image: "/images/cer1.jpg",
    url: "https://coursera.org/share/00ce7c135c146dc0ab0d3b44a08a4f7f",
  },
  {
    title: "CertNexus Certified Ethical Emerging Technologist",
    issuer: "Coursera",
    date: "January 9, 2025",
    image: "/images/cer2.jpg",
    url: "https://coursera.org/share/fdac928f95505df35a6f3916f4784f75",
  },
  {
    title: "Web Design for Everybody: Basics of Web Development & Coding",
    issuer: "Coursera",
    date: "May 13, 2024",
    image: "/images/cer3.jpg",
    url: "https://coursera.org/share/88db80f91fb0f80e185dc1977dd07de7",
  },
  {
    title: "Ethics of Artificial Intelligence",
    issuer: "Coursera",
    date: "April 4, 2025",
    image: "/images/cer4.jpg",
    url: "https://coursera.org/share/58f30e43275d22b518031cfbcfc0816a",
  },
];

function Certificate() {
  return (
    <div className="certificate-section">
      <h2 className="text-center mb-4">My Certificates</h2>
      <div className="cert-list">
        {certificates.map((cert, index) => (
          <div className="row align-items-center cert-row" key={index}>
            <div className="col-md-4 mb-2 mt-2">
              <img
                src={cert.image}
                className="img-fluid rounded cert-img"
                alt={cert.title}
              />
            </div>
            <div className="col-md-8">
              <h4 className="fw-bold">{cert.title}</h4>
              <p>
                <strong>{cert.issuer}</strong>
                <br />
                <small className="date">{cert.date}</small>
              </p>
              {cert.url ? (
                <a
                  href={cert.url}
                  className="viewDetail-button"
                >
                  View Detail
                </a>
              ) : (
                <span className="text-muted fst-italic">No link available</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificate;
