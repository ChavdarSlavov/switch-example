import React from 'react';
import Switch from './switch';

export default class App extends React.Component{
  state = {
    switch1: false,
    switch2: false
  };

  handleChange(field, value){
    this.setState({
      ...this.state,
      [field]: value
    });
  }

  render(){
    const text1 = this.state.switch1 ? <p>Hello world</p> : '';
    const text2 = this.state.switch2 ? <p>I'm visible!</p> : '';
    return (
      <div>
        <div>
          <Switch
            onChange={this.handleChange.bind(this, 'switch1')}
            checked={this.state.switch1}
            label="This is a switch"
          />
          {text1}
        </div>
        <div>
          <Switch
            onChange={this.handleChange.bind(this, 'switch2')}
            checked={this.state.switch2}
            label="Yet another switch"
          />
          {text2}
        </div>
      </div>

    );
  }

}
