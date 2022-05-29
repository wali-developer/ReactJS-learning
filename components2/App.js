import About from "./About";
import Contact from "./Contact";

const App = (props) => {
    const data = [
        {
            title: 'This is Title of About page',
            body: 'About page contains detail about Organization.'
        },
        {
            title: 'This is Title of our Contact page',
            body: 'Contact page contains the details about How someone can contact with organization'
        }
    ];
    return (
        <div>
            <About
                title={data[0].title}
                body={data[0].body}
            />
            <Contact
                title={data[1].title}
                body={data[1].body}
            />
        </div>
    );
}

export default App;