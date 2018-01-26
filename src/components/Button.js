import React, { Component } from 'react'
import './button.css'

class Button extends Component {
  clickHandler(event) {
    this.props.onButtonClick();
  }
  render () {
  	
    return (
      <div className={`action-button ${this.props.buttonClass}`} onClick={this.clickHandler.bind(this)}>
        {this.props.text}
      </div>
    )
  }
}

Button.defaultProps = {
  text: 'Button',
  buttonClass: ''
};

export default Button