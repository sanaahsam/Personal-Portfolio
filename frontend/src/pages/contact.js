import { React, useState, useEffect } from "react";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, Setname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Emailjs Service ID, Template ID, and Public ID
    const serviceId = "your_serviceID;"; //your service ID
    const templateId = "your_templateId"; //your template Id
    const publicKey = "your_public_key"; //your public key

    // Dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Sana Ahsam",
      message: message,
    };

    try {
      // Sending email using Emailjs with async/await
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSuccessMessage("Email sent successfully!");
      Setname("");
      setEmail("");
      setMessage("");
      setTimeout(() => {
        setSuccessMessage("");
      }, 6000);
    } catch (error) {
      console.log("Error sending email", error);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSuccessMessage("");
    }, 6000);

    // Cleanup the timeout when the component is unmounted
    return () => {
      clearTimeout(timeoutId);
    };
  }, [successMessage]);

  return (
    <div className="contact">
      <div className="contact_head">
        <h1>Contact Me</h1>
        <div className="contact_head-line"></div>
        <p>
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label id="name">Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            id="name"
            name="from_name"
            value={name}
            onChange={(e) => Setname(e.target.value)}
            required
          />
          <label id="email">Email</label>
          <input
            placeholder="Enter Your Email"
            type="email"
            id="email"
            name="from_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label id="text_area">Message</label>
          <textarea
            placeholder="Enter Your Message"
            id="text_area"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <div className="contact-btn">
            <button type="onSubmit">SUBMIT</button>
          </div>
          {successMessage && (
            <div className="success-message">{successMessage}</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
