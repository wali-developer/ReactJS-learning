import React, { Component } from 'react';

const myStyle = {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#FFE797'
}
const spanStyle = {
    padding: '30px 50px',
    fontSize: '35px',
    color: 'white'
}

const buttonStyle = {
    padding: '6px 16px',
    borderRadius: '10px',
    outlines: 'none',
    border: 'none',
    marginTop: '30px'
}

class Counter extends Component {
    constructor(props) {
        super();
        this.state = { count: 0 };
        this.reset = this.reset.bind(this);    // binding of reset method (this) keyword
        // this.plus = this.plus.bind(this);
        this.minus = this.minus.bind(this);
    }
    reset() {
        this.setState({ count: 0 })
    }

    plus = () => {
        this.setState((prevState) => {
            return { count: prevState.count + 1 };
        })
        // this.setState({count: this.state.count + 1});
    }
    minus(){
        this.setState((prevState) => {
            return {count: prevState.count - 1};
        })
    }
    render() {
        return (
            <div style = {myStyle}>
                <h1 style = {{padding: "15px 0"}}>Counter</h1>
                {/* <h1>{this.state.count}</h1> */}
                <i class="far fa-plus-square" onClick={this.plus} style = {{fontSize: '30px'}}></i>
                <span style = {spanStyle}>{this.state.count}</span>

                <i class="far fa-minus-square" onClick={this.minus} style = {{fontSize: '30px'}}></i><br/>
                <button onClick={this.reset} style = {buttonStyle}>Reset</button> 
            </div>
        )
    }
}

export default Counter;
