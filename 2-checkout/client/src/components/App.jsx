import React from 'react';
import axios from 'axios';
import UserInput from './UserInput.jsx';
import BillingInput from './BillingInput.jsx';
import AddressInput from './AddressInput.jsx';
import FormDisplay from './FormDisplay.jsx';
import Purchase from './Purchase.jsx';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      userStorage: [],
      billingStorage: [],
      addressStorage: []
    };
  }
  // axios.get('https://localhost:3000/checkout', (req, res) => {

  // })

  render() {
    return (
      <div>
        Working!
      </div>
    )
  }
}

export default App;