import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RentalRating extends Component {
  static propTypes = {
    rating: PropTypes.shape({
      stars: PropTypes.number.isRequired,
      reviews: PropTypes.number.isRequired
    }).isRequired
  }

  render() {
    const { stars, reviews } = this.props.rating;

    return(
      <div>
        <span>Rating Details</span>
        <span>
          <ul>
            <li>Rental Stars: {stars}</li>
            <li>Rental Reviews: {reviews}</li>
          </ul>
        </span>
      </div>
    )
  }
}

export default RentalRating;
