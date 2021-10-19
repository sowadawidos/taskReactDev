import React from "react"
import "./Main.scss"
import {FormBox} from "../FormBox/FormBox";

export const Main = ({getEmail, emailValidation, isLoading}) => {
    return (
        <>
            <section className="main__page">
                <div className="main__page-container">
                    <FormBox getEmail={getEmail} emailValidation={emailValidation} isLoading={isLoading}/>
                </div>
            </section>
        </>
    )
}