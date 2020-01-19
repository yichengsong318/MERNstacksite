import React from "react";
import { useState } from "react";
import { Form, Label, Row, Col, InputGroup, Button } from "react-bootstrap";
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
    <div className="contact-container" style={{ marginTop: 30 }}>
      <Form
        noValidate
        validated={validated}
        // action="https://sendpoint.io/id/nflcontactform"
        // method="POST"
        onSubmit={handleSubmit}
        style={{}}
        className="ml-auto mr-auto"
      >
        <Form.Group
          className="ml-auto mr-auto"
          as={Col}
          md="4"
          controlId="validationCustom01"
        >
          <Form.Label style={{ fontWeight: "bold" }}>Name</Form.Label>
          <Form.Control required type="text" placeholder="Name" name="name" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          className="ml-auto mr-auto"
          as={Col}
          md="4"
          controlId="validationCustom02"
        >
          <Form.Label style={{ fontWeight: "bold" }}>Phone number</Form.Label>
          <Form.Control
            required
            type="tel"
            placeholder="Phone Number"
            name="phone"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          className="ml-auto mr-auto message-input"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label style={{ fontWeight: "bold" }}>Message</Form.Label>
          <Form.Control as="textarea" rows="3" name="message" />
        </Form.Group>

        <Button type="submit">Submit form</Button>
      </Form>
    </div>
  );
};

export default ContactForm;
