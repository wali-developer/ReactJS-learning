const Contact = ({title, body}) => {     // use destructring array
    return(
        <div>
            <h2>Contact Us</h2>
            <p>{title}</p>
            <p>{body}</p>
        </div>
    );
}

export default Contact;