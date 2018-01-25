import React, { Component } from 'react'
import './button.css'

class Button extends Component {
  clickHadler(event) {
    this.props.onButtonClick();
  }
  render () {
  	
    return (
      <div className={`action-button ${this.props.buttonClass}`} onClick={this.clickHadler.bind(this)}>
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