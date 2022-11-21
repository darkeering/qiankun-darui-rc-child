import React, { Component } from "react";
import { Button } from "react-darui";

export class ButtonContent extends Component {
  onClick = (evt: any) => {
    console.log(evt);
  };
  render() {
    return <Button onClick={this.onClick} className={''}>Primary</Button>;
  }
}
