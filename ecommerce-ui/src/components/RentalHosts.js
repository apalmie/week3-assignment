import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RentalHost extends Component {
  static propTypes = {
    host: PropTypes.shape({
      name: PropTypes.string.isRequired,
      isSuperhost: PropTypes.bool.isRequired
    }).isRequired
  }

  render() {
    const { name, isSuperhost } = this.props.host;

    return(
      <div>
        <span>Host Details</span>
        <span>
          <ul>
            <li>Rental Cost: {name}</li>
            {isSuperhost && (
              <li>Super Host: </li>
            )}
          </ul>
        </span>
      </div>
    )
  }
}

export default RentalHost;
