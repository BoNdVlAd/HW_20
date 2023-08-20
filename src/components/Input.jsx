import React from 'react';

import { styled } from 'styled-components';

const InputField = styled.input`
  padding: 10px;
  background-color: transparent;
  border: 1px solid ${(props) => props.color || '#777777'};
  transition: all ease 0.3s;
  width: 100%;
  color: #fff;
  border-radius: 4px;
  &:focus {
    outline: none;
  }
  &:active {
    border-color: #dfe1e6;
  }
`;

const Input = (props) => {
  return <InputField placeholder={props.placeholder} {...props} />;
};

export default Input;
