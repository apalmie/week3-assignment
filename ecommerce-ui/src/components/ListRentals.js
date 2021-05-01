import React, { Component } from 'react';

import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class ListRentals extends Component {
  render() {
    return(
      <CardDeck>
        {this.props.rentals.map( rental => (
          <Card
            key={rental.props.rental.rentalId}
            style={{ width: '18rem' }}
          >
            <Card.Img src={rental.props.rental.image} />
            {rental}
            <Card.Footer>
              <Button variant="primary" onClick={() => this.props.addToCart(rental)}>
                Add Rental To Cart
              </Button>
            </Card.Footer>
          </Card>
        ))}
      </CardDeck>
    );
  }
}

export default ListRentals;
