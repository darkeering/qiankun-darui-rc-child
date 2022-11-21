import React, { Component } from 'react';
import { Pagination } from 'react-darui';

export class PaginationContent extends Component {
  render() {
    return <Pagination current={2} total={1000} size={20}></Pagination>;
  }
}
