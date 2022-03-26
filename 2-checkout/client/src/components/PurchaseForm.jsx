import React from 'react';
import axios from 'axios';



class PurchaseForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handlePurchase = this.handlePurchase.bind(this);
  }

  //next page + db storage
  handlePurchase() {
    this.props.nextHandler()
    this.props.postData()
  }

  render() {
    return (
      <div>
        <h2>Verify Your Information</h2>
        <div>
          <h3>Account Information</h3>
        <p>{this.props.userInfo.join(', ')}</p>
        </div>
        <div>
          <h3>Shipping Information</h3>
        <p>{this.props.addressInfo.join(', ')}</p>
        </div>
        <div>
          <h3>Billing Information</h3>
        <p>{this.props.billingInfo.join(', ')}</p>
        </div>
        <button
          onClick={this.handlePurchase}
        >Confirm Purchase</button>
      </div>
    )
  }
}


export default PurchaseForm;