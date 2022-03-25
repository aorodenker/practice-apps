import React from "react";
import axios from 'axios';

class AddWord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      definition: ''
    };
      this.onChangeWord = this.onChangeWord.bind(this);
      this.onSub = this.onSub.bind(this);
  }

  onChangeWord(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSub(e) {
    e.preventDefault();
    let wordAdd = {
      word: this.state.word,
      definition: this.state.definition
    }
    this.props.addAWord(wordAdd)
    this.setState({
      word: '',
      definition: ''
    });
  }


  render() {
    return (
      <div className="add-word">
        <form
        onSubmit={this.onSub}>
          <input
            name="word"
            type="text"
            placeholder="Word"
            value={this.state.word}
            onChange={this.onChangeWord}>
          </input>
          <input
            name="definition"
            type="text"
            placeholder="Define"
            value={this.state.definition}
            onChange={this.onChangeWord}>
          </input>
          <button
            className="add-word-btn"
          >+</button>
        </form>
      </div>
    )
  }
}

export default AddWord;