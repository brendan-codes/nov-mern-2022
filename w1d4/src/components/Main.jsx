import React, { Component } from 'react';
import UserCard from './UserCard';


class Main extends Component {
    constructor(){
        super();
        this.state = {
            total: 0
        }
    }

    updateTotal = () => {
        this.setState({
            total: this.state.total + 1
        })
    }
    
    render() {
        return (
            <div>
                <h1>Welcome to website!</h1>
                <p>We have <span style={{"fontWeight": "bold"}}>{this.state.total}</span> total clicks!</p>
                <button onClick={this.updateTotal}>Click me!</button>
                <UserCard name={"Brendan"} updateTotal={this.updateTotal} />
                <UserCard name={"Lia"} updateTotal={this.updateTotal} />
                <UserCard name={"Melody"} updateTotal={this.updateTotal} />
            </div>

        )
    }
}

export default Main;