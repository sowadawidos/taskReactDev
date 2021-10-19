import React from "react"
import {Form, Field} from 'react-final-form'
import ReactLoading from 'react-loading';

import "./Form.scss"

import {Button} from "../Button/Button";

export const MyForm = ({getEmail, emailValidation, isLoading}) => {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    return (
        <>
            <Form
                onSubmit={async (form) => {
                    await sleep(300)
                    alert(JSON.stringify(form, undefined, 2))
                }}
                validate={async values => {
                    const errors = {}
                    await getEmail(values.email)
                    if (!values.firstName || values.firstName.length < 3) {
                        errors.firstName = "First name must have more than 3 letters"
                    }
                    if (!values.lastName || values.lastName.length < 3) {
                        errors.lastName = "Last name must have more than 3 letters"
                    }
                    if (!values.birthDate) {
                        errors.birthDate = "Birth date required"
                    }
                    if (!emailValidation && !isLoading) {
                        errors.email = "Wrong e-mail"
                    }
                    return errors;
                }}
                render={({handleSubmit}) => (
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="form__column">
                            <Field name="firstName" type="text">
                                {({input, meta}) => (
                                    <label className="field__label">
                                        First name
                                        <input className="field__input" {...input}
                                               style={(meta.touched && meta.error) ? {border: "2px solid red"} : {}}/>
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </label>
                                )}
                            </Field>
                            <Field name="lastName" type="text">
                                {({input, meta}) => (
                                    <label className="field__label">
                                        Last name
                                        <input className="field__input" {...input}
                                               style={(meta.touched && meta.error) ? {border: "2px solid red"} : {}}/>
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </label>
                                )}
                            </Field>
                            <Field name="birthDate" type="date">
                                {({input, meta}) => (
                                    <label className="field__label">
                                        Birth date
                                        <input className="field__input" {...input}
                                               style={(meta.touched && meta.error) ? {border: "2px solid red"} : {}}/>
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </label>
                                )}
                            </Field>
                            <Field name="email" type="email">
                                {({input, meta}) => (
                                    <label className="field__label">
                                        E-mail
                                        <input className="field__input" {...input}
                                               style={(meta.touched && meta.error) ? {border: "2px solid red"} : {}}/>
                                        {
                                            isLoading &&
                                            <ReactLoading type='spin' color="red" height={25} width={25}/>
                                        }
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </label>
                                )}
                            </Field>
                            <div className="form__radios">
                                <h3 className="form__label-radio"> Gender (optional) </h3>
                                <Field name="gender" type="radio" value="man">
                                    {({input}) => (
                                        <label className="field__label field__label-radio">
                                            <input className="field__radio" {...input} checked={input.checked}
                                                   onChange={input.onChange}/>
                                            <p>Man</p>
                                        </label>
                                    )}
                                </Field>
                                <Field name="gender" type="radio" value="woman">
                                    {({input}) => (
                                        <label className="field__label field__label-radio">
                                            <input className="field__radio" {...input} checked={input.checked}
                                                   onChange={input.onChange}/>
                                            <p>Woman</p>
                                        </label>
                                    )}
                                </Field>
                                <Field name="gender" type="radio" value="other genders">
                                    {({input}) => (
                                        <label className="field__label field__label-radio">
                                            <input className="field__radio" {...input} checked={input.checked}
                                                   onChange={input.onChange}/>
                                            <p>Other</p>
                                        </label>
                                    )}
                                </Field>
                            </div>
                        </div>
                        <Button/>
                    </form>
                )}
            />
        </>
    )
}