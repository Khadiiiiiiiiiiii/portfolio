import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "antd";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  UserOutlined,
  MailOutlined,
} from "@ant-design/icons";
import "./css/contact.css";

function Contact() {
  return (
    <div className="contact-section">
      <div className="contact-content">
        <h2 className="text-center mb-4">Contact Me</h2>
        <Row gutter={[32, 16]} className="contact-container">
          {" "}
          {/* Increased horizontal gutter from 16 to 32 */}
          <Col xs={12} sm={12} className="contact-item">
            <EnvironmentOutlined className="contact-icon" />
            <div className="address-item">
              <div className="address-container">
                <strong>FPT University</strong>
                <p>
                  600 Nguyen Van Cu, An Binh Ward <br /> Ninh Kieu District, Can
                  Tho City, Vietnam
                </p>
                <a href="https://maps.app.goo.gl/NfMEp7iv4B1nAmiy9">
                  CLick here to view map.
                </a>
              </div>
              {/* <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2313.8494816605066!2d105.73185227782173!3d10.011960249913308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0882139720a77%3A0x3916a227d0b95a64!2sFPT%20University!5e0!3m2!1svi!2s!4v1746716562080!5m2!1svi!2s"
                  style={{ border: 0 }} // ✅ Đúng cú pháp JSX
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div> */}
            </div>
          </Col>
          <Col xs={12} sm={12} className="contact-item">
            <PhoneOutlined className="contact-icon" />
            <div>
              <strong>Phone Number</strong>
              <p>
                +(84) 943 767 501
                <br />
                +(84) 364 989 879 (Another phone number)
              </p>
            </div>
          </Col>
          <Col xs={12} sm={12} className="contact-item">
            <UserOutlined className="contact-icon" />
            <div>
              <strong>Facebook</strong>
              <p>
                <a
                  href="https://www.facebook.com/phamkhavyy11111"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pham Kha Vy
                </a>
              </p>
            </div>
          </Col>
          <Col xs={12} sm={12} className="contact-item">
            <MailOutlined className="contact-icon" />
            <div>
              <strong>Email</strong>
              <p>
                <a href="mailto:vypkce182254@fpt.edu.vn">
                  vypkce182254@fpt.edu.vn
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Contact;
