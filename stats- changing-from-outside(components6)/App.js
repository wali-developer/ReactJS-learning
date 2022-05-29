import React from 'react';
import Controls from './Controls';
class App extends React.Component {
    constructor(props){
        super();
        this.state = {count: 0};
        this.incCount = this.incCount.bind(this);
        this.decCount = this.decCount.bind(this);
        this.reset = this.reset.bind(this);
    }

    incCount(){
        this.setState(prev => {
            return {count: prev.count + 1};
        });
    }
    decCount(){
        this.setState(prev => {
            return {count: prev.count - 1};
        });
    }
    reset(){
        this.setState({count: 0});
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <hr/>
                {/* Sending values to controls component props */}
                <Controls increment = {this.incCount} decrement = {this.decCount} reset = {this.reset}/>
            </div>
        )
    }
}

export default App;