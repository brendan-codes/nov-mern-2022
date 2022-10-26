import React, { Component } from "react";
import Name from "./Name";

class List extends Component {
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
                <h1>The current count is {this.state.count}</h1>
                <Name name={"Brendan"} handler={this.countHandler}/>
                <Name name={"Lia"} handler={this.countHandler}/>
                <Name name={"Steve"} handler={this.countHandler}/>
                <Name name={"Melody"} handler={this.countHandler}/>
                <Name name={"Gary"} handler={this.countHandler}/>
                <Name name={"Gary"} handler={this.countHandler}/>
                <Name name={"Gary"} handler={this.countHandler}/>
                <Name name={"Gary"} handler={this.countHandler}/>
                <Name name={"Gary"} handler={this.countHandler}/>
                <Name name={"Gary"} handler={this.countHandler}/>
                <Name name={"Gary"} handler={this.countHandler}/>
                <Name name={"Gary"} handler={this.countHandler}/>
                <Name name={"Gary"} handler={this.countHandler}/>
                <Name name={"Gary"} handler={this.countHandler}/>
                <Name name={"Gary"} handler={this.countHandler}/>
                <Name name={"Gary"} handler={this.countHandler}/>
            </>
        )
    }
}

export default List;