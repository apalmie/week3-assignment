import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RentalLocation extends Component {
  static propTypes = {
    location: PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired
    }).isRequired,
    houseType: PropTypes.string.isRequired
  }

  render() {
    const { city, country } = this.props.location;
    const houseType = this.props.houseType;

    return(
      <div>
        <span>Location Details</span>
        <span>
          <ul>
            <li>House Type: {houseType}</li>
            <li>Located: {city},{country}</li>
          </ul>
        </span>
      </div>


    )
  }
}

export default RentalLocation;
