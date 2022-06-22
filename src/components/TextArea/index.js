import React from "react";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
  font-family: Avenir, sans-serif;
  border: none;
  border-bottom: 1px solid #333;
  border-radius: 0;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.5;
  color: grey;
  padding-top: 13px;
  padding-left: 15px;
  width: 100%;
  height: 150px;
  display: block;
  background: transparent;
  resize: none;
  outline: none !important;
  margin-bottom: 16px;
`;

const StyledLabel = styled.label`
  font-family: Avenir;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.5;
  color: #333;
`;

export default function TextArea({
  id,
  placeholder,
  label,
  name,
  value,
  onChange,
  ...props
}) {
  return (
    <>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledTextArea
        placeholder={placeholder}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        {...props}
      />
    </>
  );
}
