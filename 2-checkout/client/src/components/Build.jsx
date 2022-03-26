import React from 'react';
import axios from 'axios';
import UserForm from './UserForm.jsx';
import BillingForm from './BillingForm.jsx';
import AddressForm from './AddressForm.jsx';
import PurchaseForm from './PurchaseForm.jsx';



class Build extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      userInfo: [],
      addressInfo: [],
      billingInfo: [],
      next: 1
    };
    this.nextHandler = this.nextHandler.bind(this);
    this.storeUser = this.storeUser.bind(this);
    this.storeAddress = this.storeAddress.bind(this);
    this.storeBilling = this.storeBilling.bind(this);
    this.postData = this.postData.bind(this);
  }

  //next form handler
  nextHandler() {
    if (this.state.next === 4) {
      this.setState({
        next: 1
      });
    } else {
      let temp = this.state.next + 1
      this.setState({
        next: temp
      });
    }
  }

  //store user data
  storeUser(val) {
    this.setState({
      userInfo: val
    });
  }

  //store address data
  storeAddress(val) {
    this.setState({
      addressInfo: val
    });
  }
  //store billing data
  storeBilling(val) {
    this.setState({
      billingInfo: val
    });
  }


  //store data to db on purchase
  postData() {
    let combined = this.state.userInfo.concat(this.state.addressInfo, this.state.billingInfo)
    let stringCombo = JSON.stringify(combined)
    console.log(stringCombo)
    axios.post('http://localhost:3000/checkout', {data: stringCombo})
    .then(res => console.log('Successfully stored all user data from frontend: ', res))
    .catch(err => console.log('Error storing all user data from frontend: ', err))
  }

   // //delete a users info
  // deleteUser(user) {
  //   axios.delete('https://localhost:3000/checkout', {data: {username: user}})
  //   .then(res => console.log('Successfully deleted user info from frontend: ', user))
  //   .catch(err => console.log('Error deleting user info from frontend: ', err));
  // }

  render() {
    //user display
    if (this.state.next === 1) {
      return(
        <div>
          <div><UserForm
            storeUser={this.storeUser}
            nextHandler={this.nextHandler}
          /></div>
          </div>
      )
    }
    //address display
    if (this.state.next === 2) {
      return(
        <div>
          <div><AddressForm
            storeAddress={this.storeAddress}
            nextHandler={this.nextHandler}
          /></div>
        </div>
      )
    }
    //billing display
    if (this.state.next === 3) {
      return(
        <div>
          <div><BillingForm
            storeBilling={this.storeBilling}
            nextHandler={this.nextHandler}
          /></div>
        </div>
      )
    }
    //purchase display
    if (this.state.next === 4) {
      return(
        <div>
          <div><PurchaseForm
            nextHandler={this.nextHandler}
            postData={this.postData}
            userInfo={this.state.userInfo}
            addressInfo={this.state.addressInfo}
            billingInfo={this.state.billingInfo}
          /></div>
        </div>
      )
    }
  }
}


export default Build;