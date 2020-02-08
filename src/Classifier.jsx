import React from 'react'


function Confirm(props)
{
    console.log(props.userValue)
    if(props.userValue>50){
    return <p>{props.pMessage}</p>
    }
    else{
    return <p>{props.nMessage}</p>
    }
}

class Classifier extends React.Component {
    constructor(props) 
    {
        super(props);
        this.handleValueChange=this.handleValueChange.bind(this);
        // this.state = {userValue: ''}
    
        }
            handleValueChange(e)
        {
            this.props.onHandStateChange(e.target.value);
        }
    
        render()
        {
            const userValue=this.props.userValue;
            
            return (
                <div>
                    <fieldset>
                    <p>Input a nuber between 1 and 100</p>
                    <input value={userValue} onChange={this.handleValueChange} />
                </fieldset>
                <Confirm userValue={userValue} pMessage={this.props.positiveMessage} nMessage={this.props.negativeMessapg} />
                </div>
                );
        }
      
}
export default Classifier