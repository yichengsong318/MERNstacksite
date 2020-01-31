import React from "react";
import { Card } from "react-bootstrap";
import "./services.styles.scss";

const Services = () => {
  return (
    <div className="services-container">
      <Card className="menu-item" style={{}}>
        <Card.Img
          className="background-image"
          variant="top"
          src={require("../../assets/landscaping-service.jpg")}
        />
        <Card.Body>
          <Card.Title>Full Landscaping Services</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="menu-item" style={{}}>
        <Card.Img
          className="background-image"
          variant="top"
          src={require("../../assets/landscaping-service.jpg")}
        />
        <Card.Body style={{}}>
          <Card.Title>Property Management</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="menu-item" style={{}}>
        <Card.Img
          className="background-image"
          variant="top"
          src={require("../../assets/landscaping-service.jpg")}
        />
        <Card.Body>
          <Card.Title className="title">Snow Removal</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="menu-item" style={{}}>
        <Card.Img
          className="background-image"
          variant="top"
          src={require("../../assets/landscaping-service.jpg")}
        />
        <Card.Body>
          <Card.Title>Trash Removal</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="menu-item" style={{}}>
        <Card.Img
          className="background-image"
          variant="top"
          src={require("../../assets/landscaping-service.jpg")}
        />
        <Card.Body>
          <Card.Title>Bobcat Services</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="menu-item" style={{}}>
        <Card.Img
          className="background-image"
          variant="top"
          src={require("../../assets/landscaping-service.jpg")}
        />
        <Card.Body>
          <Card.Title>Power Washing</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="menu-item" style={{}}>
        <Card.Img
          className="background-image"
          variant="top"
          src={require("../../assets/landscaping-service.jpg")}
        />
        <Card.Body>
          <Card.Title>Consulting</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="menu-item" style={{}}>
        <Card.Img
          className="background-image"
          variant="top"
          src={require("../../assets/landscaping-service.jpg")}
        />
        <Card.Body>
          <Card.Title>Irrigation</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="menu-item" style={{}}>
        <Card.Img
          className="background-image"
          variant="top"
          src={require("../../assets/landscaping-service.jpg")}
        />
        <Card.Body>
          <Card.Title>Fencing</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="menu-item" style={{}}>
        <Card.Img
          className="background-image"
          variant="top"
          src={require("../../assets/landscaping-service.jpg")}
        />
        <Card.Body>
          <Card.Title>Home Improvement</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Services;
