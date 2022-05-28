import React, { useState } from "react";
import "./Form.css";
import { useMediaQuery } from 'react-responsive'
import addSubscriber from "./util/addSubscriber";

export default function Form() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: ""
    });
    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);
    let formContainer = null;

    if(isTabletOrMobile) {
        formContainer = {
            width: "70vh",
            margin: "auto",
            padding: "10px"
        }
    } else {
        formContainer = {
            width: "100vh",
            margin: "auto",
            padding: "10px"
        }
    }

    const handleFNameChange = (event) => {
        setValues({...values, firstName: event.target.value});
    };
    const handleLNameChange = (event) => {
        setValues({...values, lastName: event.target.value});
    };
    const handleEmailChange = (event) => {
        setValues({...values, email: event.target.value});
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        let output = addSubscriber(values)

        if(values.firstName && values.lastName && values.email && output !== "registered") {
            setValid(true);
        }

        setSubmitted(true);
    };

  return (
    <div style={formContainer}>
      <form class="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? <div class="success-message">Success! Thank you for subscribing!</div> : null}
        <input
          id="first-name"
          onChange={handleFNameChange}
          value={values.firstName}
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {submitted && !values.firstName ? <span id="first-name-error">Please enter a first name</span> : null}
        <input
          id="last-name"
          onChange={handleLNameChange}
          value={values.lastName}
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {submitted && !values.lastName ? <span id="last-name-error">Please enter a last name</span> : null}
        <input
          id="email"
          onChange={handleEmailChange}
          value={values.email}
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {submitted && !values.email ? <span id="email-error">Please enter an email</span> : null}
        {submitted && valid ? null : <input 
            id="submission" 
            class="form-field button" 
            type="submit" 
            placeholder="Subscribe" 
            name="subscribe" />}
      </form>
    </div>
  );
}