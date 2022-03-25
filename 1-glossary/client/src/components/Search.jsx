import React from 'react';



class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  submitSearch(e) {
    e.preventDefault();
    this.props.searchMe(this.state.value)
    console.log(this.state.value)
    this.setState({
      value: ''
    });
  }


  render() {
    return(

        <form onSubmit={this.submitSearch}>
          <input
            className="search"
            type="text"
            placeholder="Search"
            value={this.state.value}
            onChange={this.handleChange}
            >
          </input>
          <button className="search-button"
            type="submit"
          >Find it</button>
        </form>

    )
  }
}


export default Search;