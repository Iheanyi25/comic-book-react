import React from 'react'
import axios from 'axios'
import Header from './header'

class EmailComp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputVal: ''
        }
    }

    postData(newProps){
        const data = {
            email: this.state.inputVal,
            preferences:[]
        }
        axios.get('https://comic-buk.herokuapp.com')
        .then(response => {
            console.log(response);
        });

    }
    

render(){

    // this.props.inputField = document.getElementById('email');

    return 
    <div>
        <Header />
        <div className="wrapper">
        <div className="display"><h2>Why not subscribe to get notifications?</h2></div>
         <div className="details">
                <form action="" name="email">
                    <input type="email" name="email" id="email" placeholder="Enter your E-mail..."  autoComplete="off"/>
                    <button type="submit" className="button" onClick={this.postData()}>Done</button>
                </form>
            </div>
        </div>
    </div>
    
    }

}
export default EmailComp