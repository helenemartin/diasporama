import React, { useState } from "react";
import { breakPoints } from "../../styling/constants";
import styled from "styled-components";
import axios from "axios";

const FormContainer = styled.div`
  margin-top: 200px;
`;

const ContactInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: ${breakPoints.tablet}) {
    flex-direction: row;
  }
`;
const Pane = styled.div`
  margin: 0 100px;
`;
const Text = styled.div`
  width: 50%;
  max-width: 400px;
  padding-right: 40px;
`;
const Form = styled.div`
  width: 50%;
  max-width: 600px;
`;
const Name = styled.div`
  display: inline-flex;
`;

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // const [timerOnSubmit, setTimerOnSubmit] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setTimeOnSubmit(true);
  //   }, 2000);
  //   return () => clearTimeout(timer);
  // }, [setTimeOnSubmit]);

  // const eraseForm = () => {
  //   // console.log("ERASEDDD");
  //   Array.from(document.querySelector("input")).forEach(
  //     (index) => (index.value = "")
  //   );
  // };

  return (
    <FormContainer>
      <ContactInner>
        <Pane>
          <Text>
            <p>Say Hello</p>
          </Text>
        </Pane>
        <Pane>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              setLoading(true);
              const formData = new URLSearchParams();
              formData.append("form-name", "contact");
              formData.append("firstname", firstName);
              formData.append("lastname", lastName);
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
            <Name>
              <label htmlFor="firstname">First Name</label> <br />
              <input
                type="text"
                id="firstname"
                firstname="firstname"
                required
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <label htmlFor="lastname">Last Name</label> <br />
              <input
                type="text"
                id="name"
                lastname="lastname"
                required
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </Name>

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
              <p>Sending ...</p>
            ) : (
              <p>
                <button type="submit">Submit Message</button>
              </p>
            )}
            {error ? <p>An error has occured</p> : null}
          </Form>
        </Pane>
      </ContactInner>
    </FormContainer>
  );
}

// {!(loading || !timerOnSubmit) && (
//   <>
//     <Form/>

//   </>
// )}
// {(loading || !timerOnSubmit) && <Form />}
//setClearForm
// </>
