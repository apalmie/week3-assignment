import React, { Component } from 'react';
import '../css/App.css';

import RentalOption from './RentalOptions';
import AddRentals from './AddRentals';
import ListRentals from './ListRentals';
import CartItems from './ShoppingCart'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { CgShoppingCart } from 'react-icons/cg'

import { isEmpty } from 'lodash';



class App extends Component {
  constructor() {
    super();
    this.state = {
      rentalChoices: [],
      rentalsInCart: [],
      lastIndex: 0,
      formDisplay: false
    }

    this.AddRentalToCart = this.AddRentalToCart.bind(this);
    this.toggleFormDisplay = this.toggleFormDisplay.bind(this);
    this.addFormRental = this.addFormRental.bind(this);
  }

  addFormRental(rental) {
    let tempRentals = this.state.rentalChoices;
    rental.rentalId = this.state.lastIndex;

    tempRentals.unshift(<RentalOption rental={rental} quantityInCart={0} />);

    this.setState({
      rentalChoices: tempRentals,
      lastIndex: this.state.lastIndex + 1
    })
  }

  toggleFormDisplay() {
    this.setState({ formDisplay: !this.state.formDisplay  })
  }

  AddRentalToCart(rental) {
    let newRental = rental.props.rental;
    console.log(newRental.rentalId);
    let tempCartItems = this.state.rentalsInCart;
    let matchedItem = tempCartItems.filter( r => r.props.rental.rentalId === newRental.rentalId );
    let newQty;
    let updatedRental;

    console.log('Matching Item --- ');
    console.log(matchedItem);

    if(isEmpty(matchedItem)) {
      console.log('Adding New Rental');
      newQty = 1;
    } else {
      console.log(`Updating Rental: ${newRental.rentalId}`);
      tempCartItems = this.state.rentalsInCart.filter( r => r.props.rental.rentalId !== newRental.rentalId );
      console.log('Temp Cart for Updates --- ');
      console.log(tempCartItems);
      newQty = matchedItem[0].props.quantityInCart + 1;
    }

    console.log(`Updated Quantity: ${newQty}`);

    updatedRental = <RentalOption rental={newRental} quantityInCart={newQty} />;
    tempCartItems.unshift(updatedRental);

    this.setState({
      rentalsInCart: tempCartItems
    });

    console.log('Current Cart --- ');
    console.log(this.state.rentalsInCart);
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
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Vacation Rentals</Navbar.Brand>
          <Nav
            variant="pills"
            activeKey="show-cart"
          >
            <Nav.Link eventKey="show-cart">
              <CgShoppingCart />
            </Nav.Link>
          </Nav>
        </Navbar>
        <main className="page bg-white" id="rentals">
          <div className="container">
            <div className="row">
              <div className="col-md-12 bg-white">
                <div className="container">
                  <AddRentals
                    formDisplay={this.state.formDisplay}
                    toggleForm={this.toggleFormDisplay}
                    addRental={this.addFormRental}
                  />
                  <ListRentals
                    rentals={this.state.rentalChoices}
                    addToCart={this.AddRentalToCart}
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
