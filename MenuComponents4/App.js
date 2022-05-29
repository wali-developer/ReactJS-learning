import React from 'react';
import Search from './Search';
import Items from './Items';

class App extends React.Component {
    render() {
        return (
            <div className="ui vertical menu" v>
                <Items label='Inbox' value='3' />
                <Items label='Primary' value='20' isActive={true} />
                <Items label='Social' value='150' />
                <Search placeholder='Search your Email...' />
            </div>
        )
    }
}

export default App;
