import React, { Component } from "react";
import { AutoComplete } from "react-darui";

export class AutoCompleteContent extends Component {
  items = ["111 item click", "222 item click", "333 item click"];
  render() {
    return <AutoComplete items={this.items}></AutoComplete>;
  }
}
