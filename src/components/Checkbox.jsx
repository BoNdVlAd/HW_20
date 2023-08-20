import React from 'react';
import { styled } from 'styled-components';

const Flex = styled.label`
  display: flex;
  color: #fff;
  align-items: center;
  width: 100%;
  justify-content: left;

  gap: 5px;
  font-size: 14px;
`;

const Input = styled.input``;

const Checkbox = ({ children }) => {
  return (
    <>
      <Flex>
        <Input type="checkbox"></Input>
        {children}
      </Flex>
    </>
  );
};

export default Checkbox;
