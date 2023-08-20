import React from 'react';
import styled from 'styled-components';
import styles from './Registration.module.scss';
import Window from '../../components/Window';
import Icon from '../../components/Icon';
import Input from '../../components/Input';
import SubmitButton from '../../components/SubmitButton';
import Checkbox from '../../components/Checkbox';

const Flex = styled.div`
  display: flex;
  gap: 10px;
`;

const Registration = () => {
  return (
    <Window>
      <Icon />
      <h1 className={styles.title}>Sign up</h1>
      <Flex>
        <Input placeholder="First Name *"></Input>
        <Input placeholder="Last Name * "></Input>
      </Flex>
      <Input placeholder="Email Address * "></Input>
      <Input placeholder="Password * "></Input>

      <Checkbox>
        I want to receive inspiration, marketing promotions and updates via email.
      </Checkbox>
      <SubmitButton>SIGN IN</SubmitButton>
    </Window>
  );
};

export default Registration;
