import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

class CartItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCost: props.totalCost,
      cart: props.cartItems
    }
  }

  handleChange = (e) => {
    let rentalId = parseInt(e.target.id);
    this.props.delItem(rentalId);
    this.props.cartCost(this.state.cart);
  };

  componentDidMount() {
    this.props.cartCost(this.state.cart);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.totalCost !== this.props.totalCost) {
      this.setState({
        totalCost: this.props.totalCost
      })
    }
  }

  render() {

    return(
        <Card>
            <ListGroup variant="flush">
              {this.props.cartItems.map( item => (
                  <ListGroup.Item key={item.props.rental.rentalId}>
                    <Row className="cart-row">
                      <div className=".ml-3">
                        <Button
                          id={item.props.rental.rentalId}
                          variant="danger"
                          size="sm"
                          onClick={this.handleChange}
                          block
                        > X </Button>
                      </div>
                      <div className="cart-item">
                        <strong>
                          {item.props.rental.title}
                        </strong>
                        <p>
                          {item.props.rental.location.city}, {item.props.rental.location.country}
                        </p>
                        <p>
                          {item.props.quantity} @ ${item.props.rental.payment.cost} == ${parseInt(item.props.quantity) * parseInt(item.props.rental.payment.cost)}
                        </p>
                      </div>
                    </Row>
                  </ListGroup.Item>
                ))}
            </ListGroup>
          <Card.Footer>
            <p className="final-cost">
              <label>Total Cost:</label>{' '}
              <span>${this.state.totalCost}</span>
            </p>
          </Card.Footer>
        </Card>
    );
  }
}

export default CartItems;
