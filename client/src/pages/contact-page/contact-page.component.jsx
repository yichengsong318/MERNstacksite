import React from "react";
import ContactForm from "../../components/contact-form/contact-form.component";
import "./contact-page.styles.scss";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const ContactPage = () => {
  return (
    <div className="contact-page-container" style={{}}>
      <Fade left>
        <p className="contact-header">Contact Us</p>
      </Fade>
      <div style={{ padding: 10 }}></div>
      <div className="message-us">
        <Fade top>
          <div style={{}}>
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
        <div style={{ marginTop: 80 }}>
          <span className="send-us-email" style={{}}>
            Or leave us a message here!
          </span>
        </div>
      </Flip>

      <ContactForm />
      <div style={{ paddingBottom: 200 }}></div>
    </div>
  );
};
export default ContactPage;
