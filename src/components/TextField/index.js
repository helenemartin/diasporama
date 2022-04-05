import React from "react";
import styled from "styled-components";

const Input = styled.input`
  font-family: Avenir;
  width: 100%;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  border: none;
  border-bottom: 1px solid #333;
  border-radius: 0;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.5;
  background: transparent;
  color: #333;
  margin-bottom: 16px;
  &::placeholder {
    color: #333;
  }
`;

export default function TextField({
  id,
  placeholder,
  name,
  value,
  onChange,
  ...props
}) {
  return (
    <Input
      type="text"
      placeholder={placeholder}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
}
