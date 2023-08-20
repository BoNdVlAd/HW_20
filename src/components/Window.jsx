import React from 'react';
import { styled } from 'styled-components';

const Wrapper = styled.div`
  width: 350px;
  background-color: #2b303a;
  margin: 0 auto;
  margin-top: 200px;
  border-radius: 15px;
  transition: all ease 0.5s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 30px;
  transform: scale(0);
  &.active {
    transform: scale(1);
  }
`;

const Window = (props) => {
  console.log('RENDER');
  const windowRef = React.useRef();

  React.useLayoutEffect(() => {
    setTimeout(() => {
      windowRef.current.classList.add('active');
    });
    return () => {
      windowRef.current.classList.remove('active');
    };
  }, []);

  return <Wrapper key={props} ref={windowRef} {...props} />;
};

export default Window;
