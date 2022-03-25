import React from "react";
import WordBuild from './WordBuild.jsx'

let WordDisplay = (props) => (
  <div>
    <div className="word-display">
        {
          props.wordBank.map((unit, key) =>
            <WordBuild unit={unit}
            key={unit._id}
            wordDeleter={props.wordDeleter}
            editWord={props.editWord}
          />
          )}
    </div>
  </div>
)


export default WordDisplay;