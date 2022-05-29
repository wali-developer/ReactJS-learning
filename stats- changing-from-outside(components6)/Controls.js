import React, { Component } from 'react'

export default class Controls extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                {/* recive props and changing stats of another component */}
                <button onClick = {this.props.increment}>Plus</button>   
                <button onClick = {this.props.decrement}>Minus</button>
                <button onClick = {this.props.reset}>Reset</button>
            </div>
        )
    }
}
