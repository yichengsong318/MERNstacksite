import React from "react";
import ContactForm from "../../components/contact-form/contact-form.component";
import "./contact-page.styles.scss";
import Fade from "react-reveal/Fade";

const ContactPage = () => {
  return (
    <div className="contact-page-container">
      <p className="contact-header">Contact Form</p>
      <Fade right>
        <span className="send-us-email">Send us an email...</span>
      </Fade>
      <p className="company-email">
        <span style={{ marginRight: 5, fontWeight: "bold" }}>
          <i class="far fa-envelope"></i>
        </span>
        Naturesfrontierlandscaping@gmail.com
      </p>{" "}
      <Fade right>
        <span className="send-us-email">Or leave us a message here!</span>
      </Fade>
      <ContactForm />
    </div>
  );
};
export default ContactPage;
