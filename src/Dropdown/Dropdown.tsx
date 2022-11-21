import React, { Component } from "react";
import { Dropdown } from "react-darui";

export class DropdownContent extends Component {
  items = ["111 item click", "222 item click", "333 item click"];
  render() {
    return (
      <Dropdown
        items={this.items}
        onClick={(item: any) => console.log(item)}
      ></Dropdown>
    );
  }
}
