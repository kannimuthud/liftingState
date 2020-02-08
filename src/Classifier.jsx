import React from 'react'
const scaleNames = {
    r: 'rupees',
    d: 'dollor'
  };
class Classifier extends React.Component {
    handleChange=(e)=> {
      this.props.onMoneyChange(e.target.value);
    }
  
    render() {
      const money = this.props.money;
      const scale = this.props.scale;
      return (
        <fieldset>
          <legend>Enter value in {scaleNames[scale]}:</legend>
          <input value={money}
                 onChange={this.handleChange} />
        </fieldset>
      );
    }
  }
export default Classifier