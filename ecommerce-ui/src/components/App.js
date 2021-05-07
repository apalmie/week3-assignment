import React, { Component } from 'react';
import '../css/App.css';

import RentalOption from './RentalOptions';
import RentalOptionMini from './RentalOptions-mini';
import ListRentals from './ListRentals';
import DisplayModal from './DisplayModals';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import { CgShoppingCart } from 'react-icons/cg'
import { FaPlus } from 'react-icons/fa';

import { countBy } from 'lodash';

class App extends Component {
  constructor() {
    super();
    this.state = {
      totalCost: 0,
      rentalChoices: [],
      rentalsInCart: [],
      lastIndex: 0,
      formDisplay: false,
      cartDisplay: false
    }
  }

  displayCart = () => {
    this.setState({ cartDisplay: !this.state.cartDisplay })
  }

  calcTotalCost = (cart) => {
    let costs = cart.map(r => {
      return(
          {
            rentalId: r.props.rental.rentalId,
            cost: r.props.rental.payment.cost * r.props.quantity
          }
        );
      });

      return costs.reduce((a,v) => a = a + v.cost , 0 )
  }

  addFormRental = (rental) => {
    let tempRentals = this.state.rentalChoices;
    rental.rentalId = this.state.lastIndex;

    tempRentals.unshift(<RentalOption rental={rental} quantityInCart={0} />);

    this.setState({
      rentalChoices: tempRentals,
      lastIndex: this.state.lastIndex + 1
    })
  }

  toggleFormDisplay = () => {
    this.setState({ formDisplay: !this.state.formDisplay  });
  }

  addRentalToCart = (rental) => {
    console.log(rental);
    let tempCart = this.state.rentalsInCart;

    let newRental;
    let qty = 1;

    let rentalIdCount = countBy(tempCart, (r) => {
      return r.props.rental.rentalId === rental.props.rental.rentalId
    });

    let matchingRental = tempCart.filter( r => r.props.rental.rentalId === rental.props.rental.rentalId );

    console.log(rentalIdCount);
    console.log(matchingRental);

    if(rentalIdCount.true === 1) {
      qty = matchingRental[0].props.quantity + 1;
      tempCart = tempCart.filter( r => r.props.rental.rentalId !== rental.props.rental.rentalId );
    }

    newRental = <RentalOptionMini rental={rental.props.rental} quantity={qty}/>;
    tempCart.unshift(newRental);

    let newTotal = this.calcTotalCost(tempCart);

    this.setState({
      totalCost: newTotal,
      rentalsInCart: tempCart
    });
  }

  removeFromCart = (rentalId) => {
    console.log('Remove From Cart - Rental Id: '+rentalId);
    let tempCart = this.state.rentalsInCart.filter(r => r.props.rental.rentalId !== rentalId);
    let newTotal = this.calcTotalCost(tempCart);

    this.setState({
      totalCost: newTotal,
      rentalsInCart: tempCart
    });
  }

  componentDidMount() {
    fetch('./_data/airbnbs.json')
      .then(resp => resp.json())
      .then(result => {
        const rentals = result.map( rental => {
          rental.rentalId = this.state.lastIndex;

          this.setState({ lastIndex: this.state.lastIndex + 1 })

          return(
            <RentalOption
              rental={rental}
              quantityInCart={0}
            />
          )
        });

        this.setState({
          rentalChoices: rentals
        });
      });
  }

  render() {
    return (
      <Container fluid>
        <Navbar sticky="top" bg="primary" variant="dark">
          <Navbar.Brand href="#home">Vacation Rentals</Navbar.Brand>
          <Nav>
            <Nav.Link
              style={{ float: 'right'}}
              eventKey="show-cart"
            >
              <Button variant="outline-dark" onClick={this.displayCart} size="sm">
                <CgShoppingCart /> Cart
              </Button>
              <DisplayModal
                type={'cart-display'}
                visible={this.state.cartDisplay}
                onHide={this.displayCart}
                totalCost={this.state.totalCost}
                cartCost={this.calcTotalCost}
                cartItems={this.state.rentalsInCart}
                delItem={this.removeFromCart}
              />
            </Nav.Link>
              <Button variant="outline-dark" onClick={this.toggleFormDisplay} size="sm">
                <FaPlus /> Add New Rental
              </Button>
              <DisplayModal
                type={'add-rental'}
                visible={this.state.formDisplay}
                onHide={this.toggleFormDisplay}
                addRental={this.addFormRental}
              />
            </Nav>
          <Nav.Link eventKey="add-rental">
          </Nav.Link>
        </Navbar>
        <main className="page bg-white" id="rentals">
          <div className="container">
            <div className="row">
              <div className="col-md-12 bg-white">
                <div className="container">
                  <ListRentals
                    rentals={this.state.rentalChoices}
                    addToCart={this.addRentalToCart}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
        <Navbar bg="primary" variant="dark">
          <Nav className="mr-auto" />
        </Navbar>
      </Container>

    );
  }
}

export default App;
