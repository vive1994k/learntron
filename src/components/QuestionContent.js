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

  handleImageUpload(event){
    event.preventDefault();

    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.props.changeHandler(reader.result, 'imgUrl');
    }

    reader.readAsDataURL(file)
  }

  onButtonClick(){
    let input = this.refs.qPhotoFileUpload;
    input.click();
  }

  getImage(){
    let imageTemplate = null;

    if(this.props.imgUrl){
      imageTemplate = (
        <div className="q-img-wrapper">
          <img className="q-img" src={this.props.imgUrl} alt="question image"/>
        </div>
      );
    }

    return imageTemplate;
  }

  render () {
    let buttonText = this.props.imgUrl ? 'Change Image' : 'Add Image';

    return (
      <div className="q-text-wrapper" >
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
          <Button text={buttonText} onButtonClick={this.onButtonClick.bind(this)}/>
          <input 
            className="u-hide"
            type="file"
            ref="qPhotoFileUpload"
            onChange={this.handleImageUpload.bind(this)}
            accept="image/jpeg, image/jpg, image/png"/>
        </div>
        {this.getImage()}
      </div>
    )
  }
}

export default QuestionContent