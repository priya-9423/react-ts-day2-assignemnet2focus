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
    <input type="text" onChange = {this.CopyText} name= "textBox" value = {this.state.textValue} />
    <button> Click </button>
    <div>
    {this.state.textValue}
    </div>
    </div>
  )
};

} 
