import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RentalLocation from './RentalLocations';
import RentalPayment from './RentalPayments';
import RentalHost from './RentalHosts';
import RentalRating from './RentalRatings';

import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'


class RentalOption extends Component {
  static propTypes = {
    rental: PropTypes.shape({
      title: PropTypes.string.isRequired,
      houseType:PropTypes.string.isRequired,
      image: PropTypes.string,
      location: PropTypes.object.isRequired,
      payment: PropTypes.object.isRequired,
      host: PropTypes.object.isRequired,
      rating: PropTypes.object.isRequired
    }).isRequired,
    quantityInCart: PropTypes.number.isRequired
  }

  render() {
    const { title, houseType } = this.props.rental;

    return(
        <Card.Body>
          <Card.Title>{title}</Card.Title>
            <ListGroup horizontal>
              <ListGroup.Item>
                <RentalLocation
                  location={this.props.rental.location}
                  houseType={houseType}
                  />
              </ListGroup.Item>
              <ListGroup.Item>
                <RentalPayment payment={this.props.rental.payment} />
              </ListGroup.Item>
              <ListGroup.Item>
                <RentalHost host={this.props.rental.host} />
              </ListGroup.Item>
              <ListGroup.Item>
                <RentalRating rating={this.props.rental.rating} />
              </ListGroup.Item>
            </ListGroup>
        </Card.Body>
    )
  }
}

export default RentalOption
