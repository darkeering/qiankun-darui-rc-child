import React, { Component } from "react";
import { Input } from "react-darui";

export class InputContent extends Component {
  onChange = (value: any, evt: any) => {
    console.log(value);
  };
  render() {
    return <Input onChange={this.onChange}></Input>;
  }
}
