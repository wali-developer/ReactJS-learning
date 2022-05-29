import React from 'react';

class Items extends React.Component {
    constructor(props){
        super(props);

        this.state = {myName: 'Khan', age: 22}
    }
    render() {
        const myClass = this.props.isActive ? 'active teal item' : 'teal item';

        return (
            <a class={myClass} href='/'>
                {this.props.label}
                <div class="ui teal left pointing label">{this.props.value}</div>
            </a>
        )
    }
}

export default Items;
