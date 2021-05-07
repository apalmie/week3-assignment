import React, { Component } from 'react';

class RentalOptionMini extends Component {
  render() {
    const { rental, quantity } = this.props;

    return(
        <p>
          <span>{rental.title}</span>{' '}
          <label>Quantity:</label>
            <span>{quantity}</span>
        </p>
    )
  }
}

export default RentalOptionMini
