import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RentalPayment extends Component {
  static propTypes = {
    payment: PropTypes.shape({
      cost: PropTypes.number.isRequired,
      description: PropTypes.string
    }).isRequired
  }

  render() {
    const { cost, description } = this.props.payment;
    const hasPMTDescr = description.length === 0
      ? false
      : true;

    return(
      <div>
        <span>Payment Details</span>
        <span>
          <ul>
            <li>Rental Cost: {cost}</li>
            {hasPMTDescr && (
              <li>Cancellation Policy: {description}</li>            
            )}
          </ul>
        </span>
      </div>


    )
  }
}

export default RentalPayment;
