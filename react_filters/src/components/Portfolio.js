import React, { Component } from "react";
import propTypes from "prop-types";

class Portfolio extends Component {
  static propTypes = {
    filters: propTypes.array,
    state: propTypes.object,
  };
  constructor(props) {
    super(props);
    this.state = { selected: "All" };
    this.filters = ["All", "Websites", "Flayers", "Business Cards"];
  }

  render() {
    return <div></div>;
  }
}

export default Portfolio;
