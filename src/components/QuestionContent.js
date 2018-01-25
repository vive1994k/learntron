import React, { Component } from 'react'
import Button from './Button';
import TextareaAutosize from 'react-textarea-autosize';

const textareastyle = { 
  width:'100%',
  backgroundColor:'#D1EEEE',
  padding:'5px',
  border:'1px solid #4A777A',
  borderRadius:'3px'
};

class QuestionContent extends Component {
  textChangeHandler (event) {
    let newQtext = event.target.value;

    this.props.changeHandler(newQtext, 'qtext');
  }

  render () {
    return (
      <div className='q-text-wrapper' >
        <div className="q-text">
          <div className="pure-u-1 pure-u-md-1-5 v-align-middle q-label">
            Question
          </div>
          <div className="pure-u-1 pure-u-md-4-5 v-align-middle">
            <TextareaAutosize
              style={textareastyle}
              placeholder="Enter option"
              value={this.props.text}
              onChange={this.textChangeHandler.bind(this)}/>
          </div>
        </div>
        <div className="t-align-center">
          <Button text="Add Image"/>
        </div>
      </div>
    )
  }
}

export default QuestionContent