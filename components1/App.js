const App = (props) => {
    const component = 'Functional Component';
    const myStyle = {
        color: 'green',
        padding: '30px',
        textAlign: 'center'
    };

    const btnStyle = {
        padding: '5px 25px',
        fontSize: '17px'
    }

    const flag = true;
    const show = true;

    const para = <div><p>This is create and delete paragraph</p></div>

    return (
        <div style={myStyle}>
            <h1>Welcome to React Developement!!!</h1>
            <h3>This is {component}</h3>
            <div>
                <button disabled={flag} style={btnStyle}>Click</button>
                <button style={btnStyle}>Click</button>
                <button style={btnStyle}>Click</button>
            </div>
            {
                // condition
                show && para
            }
        </div>
    );
}

export default App;