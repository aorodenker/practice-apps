import React from 'react';



class AddressInput extends React.Component{
  constructor() {
    super(props);
    this.state = {
      line1: '',
      line2: '',
      city: '',
      state: '',
      zip: 0,
      phone: 0
    };
  }

  render() {
    return (
      <div></div>
    )
  }
}


export default AddressInput;