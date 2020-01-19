import React from "react";
import ContactForm from "../../components/contact-form/contact-form.component";
import "./contact-page.styles.scss";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const ContactPage = () => {
  return (
    <div
      className="contact-page-container"
      style={{ backgroundColor: "#343A40" }}
    >
      <div style={{ padding: 30 }}></div>
      <p className="contact-header">Contact Form</p>
      <div className="message-us">
        <Fade left>
          <div style={{ marginTop: 50 }}>
            <span className="send-us-email">Send us an email...</span>
          </div>
        </Fade>
        <p className="company-email">
          <span style={{ marginRight: 5, fontWeight: "bold" }}>
            <i class="far fa-envelope"></i>
          </span>
          Naturesfrontierlandscaping@gmail.com
        </p>
      </div>
      <Flip left>
        <div style={{ marginTop: 60 }}>
          <span className="send-us-email" style={{ color: "white" }}>
            Or leave us a message here!
          </span>
        </div>
      </Flip>

      <ContactForm />
    </div>
  );
};
export default ContactPage;
