import React from 'react';
import emailjs from "emailjs-com"
import "./css/ContactStyle.css"
import {useSelector} from "react-redux";

export default function ConntactPage() {
    const state = useSelector( (state) => state.activities );
    let stylebtn ={
        backgroundColor: state.button,
        borderColor: state.button
    }
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('portfolio', 'hi.szymonpytel', e.target, 'user_hzzQydlQJYalsAqTIQEAN')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div className="container-contact">
            <form className="contact-form" onSubmit={sendEmail}>

                <input style={stylebtn} className="inputEmail" type="email" name="email" placeholder="E-mail"/>

                <textarea  style={stylebtn} className="inputMessage" name="message" placeholder="Message" />
                <input  style={stylebtn} className="inputSubmit" type="submit" value="Send" />
            </form>
        </div>
    );
}
