import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ef8eaf;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

const Icon = () => {
  return (
    <Wrapper>
      <img
        style={{ width: '30px' }}
        src="https://cdn-icons-png.flaticon.com/512/565/565547.png"
        alt=""
      />
    </Wrapper>
  );
};

export default Icon;
