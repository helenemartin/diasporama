import React, { useState, useCallback } from "react";
import { breakPoints } from "../../styling/constants";
import TextField from "../TextField";
import ErrorMessage from "../ErrorMessage"
import TextArea from "../TextArea";
import styled from "styled-components";
import axios from "axios";

const FormContainer = styled.div`
  margin-top: 0;
`;
const FormHeader = styled.div`
  justify-content: flex-start;
  display: flex;
  align-items: flex-end;
  //margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  //margin-bottom: 20px;
`;
const FormTitle = styled.h4`
  padding-left: 38px;
  font-size: 3em;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-color: #272727;
  -webkit-text-stroke-width: 1px;

  @media (min-width: ${breakPoints.tablet}) {
      padding-left: 35px;
    }
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
  margin: 0 40px;
  @media (min-width: ${breakPoints.tablet}) {
    margin: 0 30px;
  }
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
  const[emailError, setEmailError] = useState("");
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
  const validateEmail = useCallback(() => {
    console.log(email);
    if(!email) {
      setEmailError("email is required")
    }else if(!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)){
      setEmailError("Incorrect email");
    } else {
      setEmailError("")
      return true;
    }
    return false;
  }, [email]);

  
  const handleEmailChange = useCallback((e) => {
    
    const newEmail = e.target.value;
    setEmail(newEmail);
    console.log(newEmail);
    
  }, []);
  const handleEmailBlur = useCallback((e) => {
    validateEmail();
  }, [validateEmail]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail()){
      return;
    }
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
            <form onSubmit={handleSubmit} name="contact" method="post">
              <TextField
                required
                id="name"
                placeholder="Name"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />

              <TextField
                id="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
              />

              
              <ErrorMessage>{emailError}</ErrorMessage>

              <TextArea
                required
                id="message"
                label="Message"
                name="message"
                value={message}
                placeholder="Say Hello!"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />

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
