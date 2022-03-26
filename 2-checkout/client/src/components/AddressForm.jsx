import React from 'react';


class AddressForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      line1: '',
      line2: 'N/A',
      city: '',
      state: '',
      zip: '',
      phone: '',
      addressStorage: []
    };
    this.addressState = this.addressState.bind(this);
    this.saveAddress = this.saveAddress.bind(this);
  }

  //update state
  addressState(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  //save address
  saveAddress(e) {
    e.preventDefault();
    let addObject = [
      this.state.line1,
      this.state.line2,
      this.state.city,
      this.state.state,
      this.state.zip,
      this.state.phone
    ]
    this.setState({
      line1: '',
      line2: 'N/A',
      city: '',
      state: '',
      zip: '',
      phone: '',
      addressStorage: addObject
    });
    this.props.storeAddress(addObject);
    this.props.nextHandler();
  }

  render() {
    return (
      <div>
        <h3>Shipping Information</h3>
        <form
          className="address-info"
          onSubmit={this.saveAddress}
        >
          <input
            name="line1"
            value={this.state.line1}
            placeholder="Street Address"
            onChange={this.addressState}
          ></input>
          <input
            name="line2"
            value={this.state.line2}
            placeholder="Apartment Number"
            onChange={this.addressState}
          ></input>
          <input
            name="city"
            value={this.state.city}
            placeholder="City"
            onChange={this.addressState}
          ></input>
          <input
            name="state"
            value={this.state.state}
            placeholder="State"
            onChange={this.addressState}
          ></input>
          <input
            name="zip"
            value={this.state.zip}
            placeholder="Zip Code"
            onChange={this.addressState}
          ></input>
          <input
            name="phone"
            value={this.state.phone}
            placeholder="Phone Number"
            onChange={this.addressState}
          ></input>
          <button>Next</button>
        </form>
      </div>
    )
  }
}


export default AddressForm;