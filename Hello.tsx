import React, {PureComponent} from 'react';
import reactDOM from 'react-DOM';

export default class Hello extends PureComponent{

  constructor(props)
  {
    super(props);
    this.state = {
      textValue : ""
    }
    this.CopyText = this.CopyText.bind(this)

  }

CopyText(e)
{
  //console.log(e.target.value);
this.setState({
textValue : e.target.value,
});
}

render()
{
  return (
    <div>
    <input type="text" onChange = {this.CopyText} name= "textBox" />
    <button> Click </button>
    <div>
    {this.state.textValue}
    </div>
    </div>
  )
};

} 
