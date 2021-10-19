import React, {useState, useEffect} from "react"

import "./scss/main.scss";

import {Main} from "./components/Main/Main";

const axios = require('axios');

function App() {
    const [emailValidation, setEmailValidation] = useState()
    const [email, setEmail] = useState()
    const [isLoading, setLoading] = useState()

    const getEmail = async email => {
        await setEmail(email)
    }

    useEffect(() => {
        setLoading(true)
        axios.get(`/api/email-validator.php?email=${email}`)
            .then(response => {
                setLoading(false)
                setEmailValidation(response.data.validation_status)
            })
            .catch(err => {
                console.log(err)
            })
    }, [email])

    return (
        <Main getEmail={getEmail} emailValidation={emailValidation} isLoading={isLoading}/>
    );
}

export default App;
