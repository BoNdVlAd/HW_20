import React from 'react';
import { styled } from 'styled-components';

const FlexStyle = styled.label`
  display: flex;
  width: 100%;
  justify-content: start;
  align-items: center;
  color: #fff;
  gap: 5px;
  font-size: 14px;
  input {
    width: 20px;
  }
`;

const Flex = ({ children }) => {
  return (
    <>
      <FlexStyle>{children}</FlexStyle>
    </>
  );
};

export default Flex;
