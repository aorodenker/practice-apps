import React from 'react';
import Build from './Build.jsx';

class App extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Spend Some Money</h1>
        <div>
          <Build/>
        </div>
      </div>
    )
  }
}

export default App;