import React, { Component } from "react";
import ServiceItem from "../common/service-item/service-item.component";
import "./service-directory.styles.scss";

class ServiceDirectory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Landscaping",
          imageUrl:
            "https://www.kangol.com/media/wysiwyg/kangol/homepage/blocks/ss19/SS19_MOBILE_MEN.jpg",
          id: 1,
          linkUrl: "/landscaping"
        },

        {
          title: "Property Management",
          imageUrl: "https://i.redd.it/kxfcoubfc2gz.jpg",
          id: 3,
          linkUrl: "/property-management"
        },

        {
          title: "Home Improvement",
          imageUrl:
            "https://snusercontent.global.ssl.fastly.net/member-profile-full/67/1731567_4923774.jpg",

          id: 5,
          linkUrl: "/home-improvement"
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
