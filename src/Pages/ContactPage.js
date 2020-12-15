import React, {useState} from 'react';
import emailjs from "emailjs-com"
import "./css/ContactStyle.css"
import {useSelector} from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {motion} from "framer-motion";

export default function ConntactPage() {
    const state = useSelector( (state) => state.activities );
    let stylebtn ={
        backgroundColor: state.button,
        borderColor: state.button
    }
    const [isSend, setIsSend] = useState(false);
    const [inputMess, setInputMess] = useState();
    const [inputEmail, setInputEmail] = useState("");
    const [correctEmail, setCorrectEmail] = useState(false);
    const [correctMess, setCorrectMess] = useState(false);
    function sendEmail(e) {
        e.preventDefault();

        if(isSend){
            emailjs.sendForm('portfolio', 'hi.szymonpytel', e.target, 'user_hzzQydlQJYalsAqTIQEAN')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            toast.success('An email has been sent.', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
        else
            toast.error('Message is empty', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        e.target.reset();
    }
    let pageTransition = {
        in: {
            opacity: 1,
            y: 0
        },
        out:{
            opacity: 0,
            y: "-100vh"
        }
    };


    const notify = (e) => {

    }
    const handleChangeMess = (e) => {
        const target = e.target;
        setInputMess(e.target.value);

        if(!target.value)
        {
            setIsSend({
                isSend: false
            })
        }
        else{
            setIsSend( {
                iseSend: true
            } )
        }
        console.log(correctMess)
    };

    return (
        <motion.div className="container-contact" initial="out" animate="in" exit ="out"  variants={pageTransition}>
            <form className="contact-form" onSubmit={(e)=>sendEmail(e)}>

                <input style={stylebtn} className="inputEmail" type="email" name="email" placeholder="E-mail"/>

                <textarea value={inputMess} onChange={(e)=>handleChangeMess(e)} style={stylebtn} className="inputMessage" name="message" placeholder="Message" />
                <motion.input  whileTap={{ scale: 1 }} whileHover={{scale: 0.8 , transition: { duration: .2}}} style={stylebtn}
                               onClick={notify} className="inputSubmit" type="submit" value="Send" />
                <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            </form>
        </motion.div>
    );
}
