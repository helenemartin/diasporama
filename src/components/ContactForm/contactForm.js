import React, { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const eraseForm = () => {
    // console.log("ERASEDDD");
    Array.from(document.querySelector("input")).forEach(
      (index) => (index.value = "")
    );
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new URLSearchParams();
        formData.append("form-name", "contact");
        formData.append("name", name);
        formData.append("email", email);
        formData.append("message", message);
        axios
          .post("/", formData)
          .then((res) => setLoading(false))
          .catch((error) => {
            setLoading(false);
            setError(true);
          });
      }}
      name="contact"
      method="post"
    >
      <p>
        <label htmlFor="name">Name</label> <br />
        <input
          type="text"
          id="name"
          name="name"
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </p>
      <p>
        <label htmlFor="email">Email</label> <br />
        <input
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </p>
      <p>
        <label htmlFor="message">Message</label> <br />
        <textarea
          id="message"
          name="message"
          required
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>
      </p>
      {loading ? (
        "Sending..."
      ) : (
        <p>
          <button type="submit" onClick={eraseForm}>
            Submit Message
          </button>
        </p>
      )}
      {error ? "An error has occured" : null}
    </form>
  );
}
