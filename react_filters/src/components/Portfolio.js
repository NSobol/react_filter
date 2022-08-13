import React, { useState } from "react";
import propTypes from "prop-types";
import ProjectList from "./ProjectList";
import Toolbar from "./Toolbar";

function Portfolio(props) {
  const [state, setState] = useState({ selected: "All" });
  const filters = ["All", "Websites", "Flayers", "Business Cards"];

  function handlerClick(filter) {
    setState({ selected: filter });
  }

  function handlerList() {
    return state.selected === "All"
      ? props.list
      : props.list.filter((item) => item.category === state.selected);
  }

  return (
    <>
      <Toolbar
        filters={filters}
        selected={state.selected}
        onSelectFilter={(filter) => {
          handlerClick(filter);
        }}
      />
      <ProjectList projects={handlerList()} />
    </>
  );
}

Portfolio.propTypes = {
  filters: propTypes.array,
  state: propTypes.object,
};

/*class Portfolio extends Component {
  static propTypes = {
    filters: propTypes.array,
    state: propTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = { selected: "All" };
    this.filters = ["All", "Websites", "Flayers", "Business Cards"];
  }

  handlerClick(filter) {
    this.setState({ selected: filter });
  }

  handlerList() {
    return this.state.selected === "All"
      ? this.props.list
      : this.props.list.filter((item) => item.category === this.state.selected);
  }

  render() {
    return (
      <div>
        <Toolbar
          filters={this.filters}
          selected={this.state.selected}
          onSelectFilter={(filter) => {
            this.handlerClick(filter);
          }}
        />
        <ProjectList projects={this.handlerList()} />
      </div>
    );
  }
}
*/
export default Portfolio;
