import React, { Component } from 'react';
import { Switch } from 'react-darui';

export class SwitchContent extends Component {
  render() {
    return (
      <>
        <Switch></Switch>
        <Switch disabled={true}></Switch>
        <Switch on={true} disabled={true}></Switch>
      </>
    );
  }
}
