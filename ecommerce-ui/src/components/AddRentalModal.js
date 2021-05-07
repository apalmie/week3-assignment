import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';


class AddRental extends Component {
  constructor() {
    super();
    this.state = {
      rentalTitle: '',
      houseType: '',
      image: '',
      city: '',
      country: '',
      hostName: '',
      isSuperhost: '',
      cost: '',
      cancelPolicy: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(e) {
    e.preventDefault();

    let tempRental = {
        title: this.state.rentalTitle,
        houseType: this.state.houseType,
        image: this.state.imagePath,
        location: {
          city: this.state.city,
          country: this.state.country
        },
        host: {
          name: this.state.hostName,
          isSuperhost: this.state.isSuperhost === 'Yes' ? true : false
        },
        payment: {
          cost: parseInt(this.state.cost),
          description: this.state.cancelPolicy
        },
        rating: {
          stars: 0,
          reviews: 0
        }
    }

    this.props.addRental(tempRental);

    this.setState({
      rentalTitle: '',
      houseType: '',
      imagePath: '',
      city: '',
      country: '',
      hostName: '',
      isSuperhost: '',
      cost: '',
      cancelPolicy: ''
    });

    this.props.toggleForm();
  }

  handleChange(e) {

    const targ = e.target;
      const name = targ.id;

      let val;

      val = name === 'isSuperhost' ?
        targ.value === 'Yes' ? true : false
        : targ.value;

    this.setState({
      [name]: val
    });

  }

  render() {
    return(
      <Form>
        <Form.Row>

          <Form.Group as={Col} controlId="rentalTitle">
            <Form.Label>Rental Title: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Rental Title"
              onChange={this.handleChange}
             />
          </Form.Group>

          <Form.Group as={Col} controlId="houseType">
            <Form.Label>House Type: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Housing Type"
              onChange={this.handleChange}
            />
          </Form.Group>

        </Form.Row>

        <Form.Label>LOCATION:</Form.Label>
        <Form.Row>

          <Form.Group as={Col} controlId="city">
            <Form.Label>City: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Rental City"
              onChange={this.handleChange}
             />
          </Form.Group>

          <Form.Group as={Col} controlId="country">
            <Form.Label>Country: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Country"
              onChange={this.handleChange}
            />
          </Form.Group>

        </Form.Row>

        <Form.Label>PAYMENT:</Form.Label>
        <Form.Row>

          <Form.Group as={Col} controlId="cost">
            <Form.Label>Cost: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Rental Cost"
              onChange={this.handleChange}
             />
          </Form.Group>

          <Form.Group as={Col} controlId="cancelPolicy">
            <Form.Label>Description: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Description"
              onChange={this.handleChange}
            />
          </Form.Group>

        </Form.Row>

        <Form.Label>HOST:</Form.Label>
        <Form.Row>

          <Form.Group as={Col} controlId="hostName">
            <Form.Label>Host Name: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Host Name"
              onChange={this.handleChange}
             />
          </Form.Group>

          <Form.Group as={Col} controlId="isSuperhost">
            <Form.Label>Are you a Super Host? </Form.Label>
            <Form.Control
              as="select"
              custom
              onChange={this.handleChange}
            >
              <option>Yes</option>
              <option>No</option>
            </Form.Control>
          </Form.Group>

        </Form.Row>



        <Button onClick={this.handleAdd}>
          Create New Rental
        </Button>


      </Form>
    );
  }
}

export default AddRental;
