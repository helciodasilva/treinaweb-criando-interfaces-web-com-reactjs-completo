import React from 'react';

export default class MeuCheckbox extends React.Component {

  constructor(){
    super();
    this.state = {
      totalClicks: 0,
      isChecked: false
    }
  }

  onChange() {
    var totalClicks = this.state.totalClicks+1;
    this.setState({isChecked: !this.state.isChecked, totalClicks});
  }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.onChange.bind(this)}
        />
        <span id="meuSpan" >
          {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
        </span>
        <div>
          <b>Total de Cliques:</b> {this.state.totalClicks}
        </div>
      </div>
    );
  }
}