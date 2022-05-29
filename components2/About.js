const About = ({title, body}) => {      // use destructring array
    return(
        <div>
            <h2>About Us</h2>
            <p>{title}</p>
            <p>{body}</p>
        </div>
    );
}

export default About;