import React from 'react';
import styled from 'styled-components';
import styles from './Registration.module.scss';
import Window from '../../components/Window';
import Icon from '../../components/Icon';
import Input from '../../components/Input';
import SubmitButton from '../../components/SubmitButton';
import Flex from '../../components/Flex';

const FlexName = styled.div`
  display: flex;
  gap: 10px;
`;

const Registration = () => {
  const saveRef = React.useRef();
  const [email, setEmail] = React.useState('');
  const [emailIsValid, setEmailIsValid] = React.useState(null);

  const [password, setPassword] = React.useState('');
  const [passwordIsValid, setPasswordIsValid] = React.useState(null);

  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w{3,}@\w{2,}\.\w{2,}$/);
  };
  const validatePassword = (email) => {
    return String(email).match(/^\w{8,}[A-Z]+[a-z]+$/);
  };

  const handleInputEmail = (value) => {
    setEmail(value);
    if (validateEmail(value)) {
      setEmailIsValid(true);
    } else if (value.length === 0) {
      setEmailIsValid(null);
    } else {
      setEmailIsValid(false);
    }
  };

  const handleInputPassword = (value) => {
    setPassword(value);
    if (validatePassword(value)) {
      setPasswordIsValid(true);
    } else if (value.length === 0) {
      setPasswordIsValid(null);
    } else {
      setPasswordIsValid(false);
    }
  };

  const submitRegistration = () => {
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
  };
  return (
    <Window>
      <Icon />
      <h1 className={styles.title}>Sign up</h1>
      <FlexName>
        <Input onChange={(e) => setFirstName(e.target.value)} placeholder="First Name *"></Input>
        <Input onChange={(e) => setLastName(e.target.value)} placeholder="Last Name * "></Input>
      </FlexName>
      <Input
        type="email"
        value={email}
        onChange={(e) => handleInputEmail(e.target.value)}
        placeholder="Email Address *"
        color={emailIsValid === null ? '' : emailIsValid ? 'green' : 'red'}></Input>
      <Input
        type="text"
        value={password}
        onChange={(e) => handleInputPassword(e.target.value)}
        placeholder="Password * "
        color={passwordIsValid === null ? '' : passwordIsValid ? 'green' : 'red'}></Input>

      <Flex>
        <input ref={saveRef} type="checkbox"></input>I want to receive inspiration, marketing
        promotions and updates via email.
      </Flex>
      <SubmitButton
        className={passwordIsValid && emailIsValid ? '' : 'disabled'}
        onClick={submitRegistration}>
        SIGN IN
      </SubmitButton>
    </Window>
  );
};

export default Registration;
