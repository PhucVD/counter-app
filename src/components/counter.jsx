import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-sm btn-secondary m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    );
  }

  formatValue() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    return this.props.counter.value > 0
      ? classes + "info"
      : classes + "warning";
  }
}

export default Counter;
