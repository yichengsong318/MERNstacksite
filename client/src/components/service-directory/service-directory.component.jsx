import React, { Component } from "react";
import ServiceItem from "../common/service-item/service-item.component";
import "./service-directory.styles.scss";

class ServiceDirectory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Landscaping / Construction",
          imageUrl:
            "https://www.wanderglobe.org/wp-content/uploads/2018/07/Landscaping.jpg",
          id: 1,
          linkUrl: "landscaping&construction"
        },
        {
          title: "Home Improvement",
          imageUrl:
            "https://www.build-review.com/wp-content/uploads/2019/12/Home-Renovation.jpg",

          id: 5,
          linkUrl: "home-improvement"
        }
      ]
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherProps }) => (
          <ServiceItem key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default ServiceDirectory;
