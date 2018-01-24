import React, { Component } from 'react';
import Button from './Button';
import TextareaAutosize from 'react-textarea-autosize';

const textareastyle = { 
  width:'100%',
  backgroundColor:'#D1EEEE',
  padding:'5px',
  border:'1px solid #4A777A',
  borderRadius:'3px'
};

class OptionWrapper extends Component {
  
  getOptions() {
    return (
      <div className="q-options">
        <div className="q-option">
          <div className="pure-u-1 pure-u-md-1-5 v-align-middle q-label">
            Option X
          </div>
          <div className="pure-u-1 pure-u-md-4-5 v-align-middle">
            <TextareaAutosize
              style={textareastyle}
              placeholder="Enter option"/>
          </div>
        </div>
        <div className="q-option">
          <div className="pure-u-1 pure-u-md-1-5 v-align-middle q-label">
            Option X
          </div>
          <div className="pure-u-1 pure-u-md-4-5 v-align-middle">
            <TextareaAutosize
              style={textareastyle}
              placeholder="Enter option"/>
          </div>
        </div>
      </div>
    );
  }

  render () {
  	
    return (
      <div className="">
        {this.getOptions()}
        <Button text="Add"/>
        <Button text="Delete"/>
      </div>
    )
  }
}

export default OptionWrapper;