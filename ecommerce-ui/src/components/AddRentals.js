import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';

class AddRentals extends Component {
  constructor() {
    super();
    this.state = {
      rentalTitle: '',
      houseType: '',
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
      const val = targ.value;
      const name = targ.name;

    this.setState({
      [name]: val
    })
  }


  render() {
    return (
      <div className={
        'card textcenter mt-3 ' + (this.props.formDisplay ? '' : 'add-rental')
      }>

        <div
          className="rental-addheading card-header bg-primary"
          onClick={this.props.toggleForm}
          style={{
            color: 'white'
          }}
        >
          <FaPlus /> Add New Rental
        </div>

        <div className="card-body">
          <form
            id="addRentalForm"
            noValidate
            onSubmit={this.handleAdd}
          >

            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="rentalTitle"
                readOnly
              >
                Rental Title:
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="rentalTitle"
                  placeholder="Rental Title..."
                  value={this.state.rentalTitle}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row">
                <label
                  className="col-md-2 col-form-label text-md-right"
                  htmlFor="houseType"
                  readOnly
                >
                  House Type:
                </label>
                <div className="col-md-10">
                  <input
                    type="text"
                    className="form-control"
                    name="houseType"
                    placeholder="House Type..."
                    value={this.state.houseType}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="form-group form-row">
                  <label
                    className="col-md-2 col-form-label text-md-right"
                    htmlFor="imagePath"
                    readOnly
                  >
                    Rental Image:
                  </label>
                  <div className="col-md-10">
                    <input
                      type="text"
                      className="form-control"
                      name="imagePath"
                      placeholder="Image Path..."
                      value={this.state.imagePath}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

              <div className="form-group form-row">
                <label
                  className="col-md-2 col-form-label text-md-right"
                  htmlFor="city"
                >
                  City:
                </label>
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    name="city"
                    id="city"
                    value={this.state.city}
                    onChange={this.handleChange}
                  />
                </div>
                <label
                  className="col-md-2 col-form-label text-md-right"
                  htmlFor="country"
                >
                  Country:
                </label>
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    name="country"
                    id="country"
                    value={this.state.country}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="form-group form-row">
                <label
                  className="col-md-2 col-form-label text-md-right"
                  htmlFor="hostName"
                >
                  Host Name:
                </label>
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    name="hostName"
                    id="hostName"
                    value={this.state.hostName}
                    onChange={this.handleChange}
                  />
                </div>
                <label
                  className="col-md-2 col-form-label text-md-right"
                  htmlFor="isSuperhost"
                >
                  Are you a Super Host?
                </label>
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    name="isSuperhost"
                    id="isSuperhost"
                    value={this.state.isSuperhost}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="form-group form-row">
                <label
                  className="col-md-2 col-form-label text-md-right"
                  htmlFor="cost"
                >
                  Rental Cost:
                </label>
                <div className="col-md-4">
                  <input
                    type="number"
                    className="form-control"
                    name="cost"
                    id="cost"
                    value={this.state.cost}
                    onChange={this.handleChange}
                  />
                </div>
                <label
                  className="col-md-2 col-form-label text-md-right"
                  htmlFor="cancelPolicy"
                >
                  Cancelation Policy:
                </label>
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    name="cancelPolicy"
                    id="cancelPolicy"
                    value={this.state.cancelPolicy}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="form-group form-row mb-0">
                <div className="offset-md-2 col-md-10">
                  <button
                    type="submit"
                    className="btn btn-primary d-block ml-auto"
                  >
                    Add Rental
                  </button>
                </div>
              </div>
          </form>
        </div>
      </div>
    )
  }
}

export default AddRentals;
