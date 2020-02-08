import React from 'react';
import ReactDom from 'react-dom';
<<<<<<< HEAD

import HomeApp from './HomeApp'
=======
import Classifier from './Classifier.jsx'

>>>>>>> d0d8cc10081ef7840064c6b07b7b48700e924f4a




<<<<<<< HEAD

=======
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
>>>>>>> d0d8cc10081ef7840064c6b07b7b48700e924f4a

ReactDom.render(<HomeApp />, document.getElementById('root'))

