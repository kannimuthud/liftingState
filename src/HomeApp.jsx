import React from 'react';
import Classifier from './Classifier.jsx'

function toRupees(dollor) {
  return (dollor *71.5 );
}

function toDollor(rupees) {
  return (rupees / 71.5 );
}
function tryConvert(money, convert) {
  const input = parseFloat(money);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
class HomeApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {money: '', scale: 'r'};
  }

  handleRupeesChange=(money)=> {
    this.setState({scale: 'd', money});
  }

  handleDollorChange=(money)=> {
    this.setState({scale: 'r', money});
  }

  render() {
    const scale = this.state.scale;
    const money = this.state.money;
    const rupees = scale === 'r' ? tryConvert(money, toRupees) : money;
    const dollor = scale === 'd' ? tryConvert(money, toDollor) : money;

    return (
      <div>
        <Classifier
          scale="r"
          money={rupees}
          onMoneyChange={this.handleRupeesChange} />

        <Classifier
          scale="d"
          money={dollor}
          onMoneyChange={this.handleDollorChange} />



      </div>
    );
  }
}
export default HomeApp