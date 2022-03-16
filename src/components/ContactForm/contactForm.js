import React, { useState } from "react";
import { breakPoints } from "../../styling/constants";
import styled from "styled-components";
import axios from "axios";

const FormContainer = styled.div`
  margin-top: 0;
`;
const FormHeader = styled.div`
  justify-content: flex-start;
  display: flex;
  align-items: flex-end;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  margin-bottom: 20px;
`;
const FormTitle = styled.h4`
  margin-left: 50px;
  font-size: 3em;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-color: #272727;
  -webkit-text-stroke-width: 1px;
`;
const ContactInner = styled.div`
  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: ${breakPoints.tablet}) {
    flex-direction: row;
  }
`;
const Pane = styled.div`
  margin: 0 80px;
`;
const Text = styled.div`
  width: 100%;
  max-width: 400px;
  padding-right: 40px;

  text-align: start;
`;
const Form = styled.div`
  padding-top: 20px;
  width: 100%;
  max-width: 600px;
`;
const Name = styled.div`
  display: inline-flex;
`;

const Submit = styled.button`
  background: none;
  border: 2px solid crimson;
  color: crimson;
  font-size: 18px;
  font-weight: 700;
`;

export default function ContactForm() {
  const [name, setName] = useState("");
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
  const clearForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <FormContainer>
      <FormHeader>
        <FormTitle>Contact</FormTitle>
      </FormHeader>
      <ContactInner>
        <Pane>
          <Text>
            <p>
              If you are either a raconteuse or a raccoon
              organisation/non-profit/individual who need no embezzlement, a
              business looking to create a safer habitat for endangered species
              or a like-minded organisation/non-profit/pet that is working to
              support racoonteuses, get in touch and let’s find out how we can
              work together.
            </p>
          </Text>
        </Pane>
        <Pane>
          <Form>
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
                  .then((res) => {
                    setLoading(false);
                    clearForm();
                  })
                  .catch((error) => {
                    setLoading(false);
                    setError(true);
                  });
              }}
              name="contact"
              method="post"
            >
              <Name>
                <label htmlFor="name">First Name</label> <br />
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
                <label htmlFor="name">Last Name</label> <br />
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
                <Submit type="submit">Submit Message </Submit>
              )}
              {error ? <p>An error has occured</p> : null}
            </form>
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
