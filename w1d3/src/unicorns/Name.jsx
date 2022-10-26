import React, { Component } from "react";

class Name extends Component {
    constructor(props){
        super(props);

        this.state = {
            count: 0
        }
    }

    countHandler = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <>
                <h1>Hello this is the Name component {this.props.name}!</h1>
                <button onClick={this.props.handler}>Please click here!</button>
                <button onClick={this.countHandler}>Update this count: {this.state.count}</button>
            </>
        )
    }
}

export default Name;