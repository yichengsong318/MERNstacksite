import React from "react";
import { useState } from "react";
import { Form, Label, Row, Col, InputGroup, Button } from "react-bootstrap";
import LightSpeed from "react-reveal/LightSpeed";
import "./contact-form.styles.scss";

const ContactForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    console.log(event);

    setValidated(true);
  };
  return (
    <div className="contact-container">
      <Form
        noValidate
        validated={validated}
        action="https://sendpoint.io/id/nflcontactform"
        method="POST"
        onSubmit={handleSubmit}
        style={{}}
        className="ml-auto mr-auto"
      >
        <div style={{ padding: 30 }}></div>
        <Form.Group
          className="ml-auto mr-auto"
          as={Col}
          md="4"
          controlId="validationCustom01"
        >
          {" "}
          <LightSpeed left>
            <Form.Label className="input-label">Name</Form.Label>
          </LightSpeed>
          <Form.Control required type="text" placeholder="Name" name="name" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          className="ml-auto mr-auto"
          as={Col}
          md="4"
          controlId="validationCustom02"
        >
          <LightSpeed right>
            <Form.Label className="input-label">Phone number</Form.Label>
          </LightSpeed>
          <Form.Control
            required
            type="tel"
            placeholder="XXX-XXX-XXXX"
            name="phone"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          className="ml-auto mr-auto message-input"
          controlId="exampleForm.ControlTextarea1"
        >
          <LightSpeed left>
            <Form.Label className="input-label">Message</Form.Label>
          </LightSpeed>
          <Form.Control
            required
            as="textarea"
            rows="3"
            name="message"
            placeholder="I would like more information regarding..."
          />
        </Form.Group>

        <Button type="submit">Submit form</Button>
      </Form>
    </div>
  );
};

export default ContactForm;
