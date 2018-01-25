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
  // constructor(props){
  //   super(props);
  // }

  addButtonClick() {
    let newOptions = Object.assign([], this.props.options);

    newOptions.push('');

    this.props.changeHandler(newOptions, 'options');
  }

  deleteButtonClick() {
    let newOptions = Object.assign([], this.props.options);

    newOptions.pop();

    this.props.changeHandler(newOptions, 'options');
  }

  onOptionChange(index, event){
    let newOption = event.target.value;
    let newOptions = Object.assign([], this.props.options);

    newOptions[index] = newOption;

    this.props.changeHandler(newOptions, 'options');
  }
  
  getOptions() {
    let _self = this;

    return (
      <div className="q-options">
      {this.props.options.map(function(thisOption, index){
        return (
          <div key={index} className="q-option">
            <div className="pure-u-1 pure-u-md-1-5 v-align-middle q-label">
              Option {index+1}
            </div>
            <div className="pure-u-1 pure-u-md-4-5 v-align-middle">
              <TextareaAutosize
                style={textareastyle}
                placeholder="Enter option"
                onChange={_self.onOptionChange.bind(_self,index)}
                value={thisOption}/>
            </div>
          </div>
        );
      })}
      </div>
    );
  }

  render () {
  	let {options=[]} = this.props;
    let addButtonClass = options.length < 6 ? '' : 'u-hide';
    let deleteButtonClass = options.length > 2 ? '' : 'u-hide';

    return (
      <div className="">
        {this.getOptions()}
        <Button 
          buttonClass={addButtonClass} 
          text="Add"
          onButtonClick={this.addButtonClick.bind(this)}/>
        <Button 
          buttonClass={deleteButtonClass}
          text="Delete"
          onButtonClick={this.deleteButtonClick.bind(this)}/>
      </div>
    )
  }
}

export default OptionWrapper;