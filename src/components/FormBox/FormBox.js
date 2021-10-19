import React from "react"
import Fade from "react-reveal/Fade";

import "./FormBox.scss"

import {MyForm} from "../Form/Form";

export const FormBox = ({getEmail, emailValidation, isLoading}) => {
    return (
        <>
            <div className="form__box">
                <div className="form__box-circles">
                    <span className="circles"/>
                    <span className="circles"/>
                    <span className="circles"/>
                </div>
                <div className="form__box-second-box">
                    <Fade bottom>
                        <MyForm getEmail={getEmail} emailValidation={emailValidation} isLoading={isLoading}/>
                    </Fade>
                </div>
            </div>
        </>
    )
}