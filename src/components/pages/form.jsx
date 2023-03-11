import React, { useState } from "react";
import "./form.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const url =
      "mailto:moontimeletters@gmail.com?subject=Contact Form Submission&body=" +
      encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = url;
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h3>Name</h3>
        <label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoFocus
          />
        </label>
        <h3>Email</h3>
        <label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <h3>Message</h3>
        <label>
          <textarea
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </label>
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
