import React, { Component } from "react";
import { Button, Notification } from "react-darui";

export class NotificationContent extends Component<any, any> {
  add = () => {
    Notification.info({
      message: "info info info info info info" + new Date().getTime(),
    });
  };
  render() {
    return (
      <>
        <Button onClick={this.add} className={""}>
          open notification
        </Button>
      </>
    );
  }
}
