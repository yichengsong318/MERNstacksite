import React from "react";
import { withRouter } from "react-router-dom";
import "./service-item.styles.scss";

const ServiceItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">View Now</span>
    </div>
  </div>
);

export default withRouter(ServiceItem);
