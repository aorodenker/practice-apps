import React from 'react';

class BillingForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      card: '',
      expDate: '',
      cvv: '',
      billZip: '',
      billingStorage: []
    };
    this.updateBilling = this.updateBilling.bind(this);
    this.saveBilling = this.saveBilling.bind(this);
  }

  //update state
  updateBilling(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  //save billing info
  saveBilling(e) {
    e.preventDefault();
    let billObject = [
      this.state.card,
      this.state.expDate,
      this.state.cvv,
      this.state.billZip
    ]
    this.setState({
      card: '',
      expDate: '',
      cvv: '',
      billZip: '',
      billingStorage: billObject
    })
    this.props.storeBilling(billObject);
    this.props.nextHandler();
  }

  render() {
    return (
      <div>
          <h3>Payment Information</h3>
        <form
          className="billing-form"
          onSubmit={this.saveBilling}
        >
          <input
          name="card"
          value={this.state.card}
          placeholder="Credit Card"
          onChange={this.updateBilling}
          ></input>
          <input
          name="expDate"
          value={this.state.expDate}
          placeholder="Expiration Date"
          onChange={this.updateBilling}
          ></input>
          <input
          name="cvv"
          value={this.state.cvv}
          placeholder="CVV"
          onChange={this.updateBilling}
          ></input>
          <input
          name="billZip"
          value={this.state.billZip}
          placeholder="Billing Zip Code"
          onChange={this.updateBilling}
          ></input>
          <button>Next</button>
        </form>
      </div>
    )
  }
}


export default BillingForm;