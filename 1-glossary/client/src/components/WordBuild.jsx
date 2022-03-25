import React from "react";

class WordBuild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wordEdit: '',
      definitionEdit: '',
      showInput: false
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.stateEdit = this.stateEdit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.showFields = this.showFields.bind(this);
  }
  handleDelete(e) {
    e.preventDefault();
    this.props.wordDeleter(this.props.unit.word)
  }

  stateEdit(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  showFields(e) {
    e.preventDefault();
    this.setState({
      showInput: true
    });
  }

  handleEdit(e) {
    e.preventDefault();
    let wordToEdit = {
      word: this.props.unit.word,
      definition: this.state.definitionEdit
    }
    console.log(wordToEdit)
    this.props.editWord(wordToEdit);
    this.setState({
      wordEdit: '',
      definitionEdit: '',
      showInput: false
    });
  }

  render() {
    if (!this.props.unit) {
      return (<div></div>)
    } else {
      return (

        <div className="word-build">
          <div>
            <b>{this.props.unit.word}</b> - {this.props.unit.definition}
          </div>
          <div>{!this.state.showInput ? <button onClick={this.showFields}>Edit</button> :
            <form
              onSubmit={this.handleEdit}>
              <input
                name="definitionEdit"
                type="text"
                placeholder="New definition"
                value={this.state.definitionEdit}
                onChange={this.stateEdit}>
              </input>
              <button>Submit</button>
            </form>}
          <button
            onClick={this.handleDelete}
            >Remove</button>
            </div>
        </div>

      )
    }
  }
}







export default WordBuild;