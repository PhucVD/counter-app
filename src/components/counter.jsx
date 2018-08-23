import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.counter = this.props.counter;
    this.onDelete = this.props.onDelete;
    this.onIncrement = this.props.onIncrement;
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
        <button
          onClick={() => this.onIncrement(counter)}
          className="btn btn-sm btn-secondary m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.onDelete(counter.id)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    );
  }

  formatValue() {
    return this.counter.value === 0 ? "Zero" : this.counter.value;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    return this.counter.value > 0 ? classes + "info" : classes + "warning";
  }
}

export default Counter;
