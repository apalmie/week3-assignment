import React, { Component } from 'react';

import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ListRentals extends Component {
  render() {
    return(
      <CardColumns>
        {this.props.rentals.map( rental => (
          <Card
            key={rental.props.rental.rentalId}
          >
            <Row>
              <Col>
                <Card.Img src={rental.props.rental.image} />
              </Col>
              <Col>
                {rental}
              </Col>
            </Row>
              <Card.Footer>
                <Button variant="primary" onClick={() => this.props.addToCart(rental)}>
                  Add Rental To Cart
                </Button>
              </Card.Footer>
          </Card>
        ))}
      </CardColumns>
    );
  }
}

export default ListRentals;
