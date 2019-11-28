import React, {PureComponent} from 'react';
import reactDOM from 'react-DOM';

export default class Hello extends PureComponent{

  constructor(props)
  {
    super(props);
    this.state = {
      textValue : "sddff"
    }
    this.CopyText = this.CopyText.bind(this)
    this.inputHandler = React.createRef();

    this.onbuttonClick = this.onbuttonClick.bind(this);

    let callBackRef;
  }

CopyText(e)
{
  //console.log(e.target.value);
this.setState({
textValue : e.target.value,
});
}

onbuttonClick()
{
  this.inputHandler.current.focus();
  
  this.callBackRef.focus()
}

render()
{
  return (
    <div>
    First Name:  <input type="text" onChange = {this.CopyText} name= "textBox" value = {this.state.textValue} />
    
    Name: <input type="text" name= "textBox" ref = {this.inputHandler}  />

    CallBack Name: <input type="text" name= "textBox" ref = {(handle) => this.callBackRef = handle}  />

    <button onClick = {this.onbuttonClick}> Click </button>
    {
    // <div>
    // {this.state.textValue}
    // </div>
    }
    </div>
  )
};

} 
