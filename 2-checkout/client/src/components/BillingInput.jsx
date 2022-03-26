import React from 'react';



class BillingInput extends React.Component{
  constructor() {
    super(props);
    this.state = {
      card: null,
      expDate: null,
      cvv: null,
      billZip: null
    };
  }

  render() {
    return (
      <div></div>
    )
  }
}


export default BillingInput;