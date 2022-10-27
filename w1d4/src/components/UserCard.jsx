import React, { Component } from 'react';


class UserCard extends Component {
    constructor(props){
        super(props);
        console.log(props);

        this.state = {
            count: 0
        }
    }

    updateCount = () => {
        this.setState({
            count: this.state.count + 1
        })
        this.props.updateTotal();
    }

    render(){
        return (
            <>
                <p style={{"color": "red"}}>This is the UserCard!</p>
                <button onClick={this.updateCount}>Click me to update total! You clicked this button {this.state.count} number of times!</button>
            </>
        )
    }
}

export default UserCard;