import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class CartItems extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    }

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({
      show: !this.state.show
    })
  }


  render() {
    return <div> </div>
  }
}

export default CartItems;
