import React from 'react';
import ReactDom from 'react-dom';
import Classifier from './Classifier.jsx'





class HomeApp extends React.Component{
    constructor(props){
        super(props);
        this.handleStateChange=this.handleStateChange.bind(this);
        this.state={
            userValue:''
        }
    }
    handleStateChange(value){
        this.setState({userValue:value})
    }
    render(){
        return(
            <div>
            <Classifier onHandStateChange={this.handleStateChange} userValue={this.state.userValue} positiveMessage="Number greater than 50" negativeMessapg="number lesser than 50"/>
            <Classifier onHandStateChange={this.handleStateChange}  userValue={this.state.userValue} positiveMessage="pass" negativeMessapg="fail"/>
            </div>

        );
    }
}

ReactDom.render(<HomeApp />, document.getElementById('root'))

