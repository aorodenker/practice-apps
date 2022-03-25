import React from "react";
import axios from 'axios';
import AddWord from './AddWord.jsx';
import WordDisplay from './WordDisplay.jsx';
import Search from './Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wordBank: [],
    };

    this.searchMe = this.searchMe.bind(this);
    this.showAll = this.showAll.bind(this);
    this.wordDeleter = this.wordDeleter.bind(this);
    this.addAWord = this.addAWord.bind(this);
    this.editWord = this.editWord.bind(this);
  }

  componentDidMount() {
    this.showAll()
  }

  showAll() {
    axios.get('/glossary')
    .then(res => {
      this.setState({
        wordBank: res.data
      });
    })
    .catch(err => console.log('Error mounting wordBank: ' + err))
  }

  wordDeleter(val) {
    var deleteMe = val
    axios.delete('http://127.0.0.1:3000/glossary', {data: {word: deleteMe}})
      .then(res => {
        this.showAll()
        console.log('Word deleted from frontend: ' + val)})
      .catch(err => {console.log('Failed to delete from frontend: ' + err)})
  }

  searchMe(toFind) {
    let filteredBank = [];
    let filtered = this.state.wordBank.forEach((curWord) => {
      if (curWord.word.includes(toFind)) {
        console.log(curWord)
        filteredBank.push(curWord)
      }
    });
    this.setState({
      wordBank: filteredBank
    });
    console.log('after search word bank: ', this.state.wordBank)
  }

  addAWord(val) {
    axios.post('http://127.0.0.1:3000/glossary', val)
      .then(res => {
        this.showAll()
        console.log('onSub working! ' + res.data)})
      .catch(err => console.log('Error adding word from frontend: ' + err));
  }

  editWord(val) {
    axios.post('http://127.0.0.1:3000/glossary/edit', val)
    .then(res => {
      this.showAll()
      console.log('Word edited from frontend' + res.data)})
    .catch(err => {console.log('Failed to edit from frontend' + err)})
  }

  render () {
    return (
    <div>
      <div className="word-glossary">
        <h1>Words on Words on Words</h1>
      </div>
      <div>
        <AddWord addAWord={this.addAWord}/>
      </div>
        <button
          onClick={this.showAll}
          >Show All
        </button>
      <div>
        <Search searchMe={this.searchMe}/>
      </div>
      <div>
        <WordDisplay wordBank={this.state.wordBank} wordDeleter={this.wordDeleter} editWord={this.editWord}/>
      </div>
    </div>
    )
  }
}

export default App;