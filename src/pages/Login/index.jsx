import React from 'react';
import styled from 'styled-components';
import styles from './Login.module.scss';
import Icon from '../../components/Icon';
import Input from '../../components/Input';
import SubmitButton from '../../components/SubmitButton';
import Window from '../../components/Window';
import Checkbox from './../../components/Checkbox';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [emailIsValid, setEmailIsValid] = React.useState(null);

  const [password, setPassword] = React.useState('');
  const [passwordIsValid, setPasswordIsValid] = React.useState(null);

  console.log(emailIsValid);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^(\w{3,})+@\w+(\w{1,})+.\w+(\w{1,})+$/);
  };
  const validatePassword = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^(\w[A-Za-z]{8,})+$/);
  };

  const handleInputEmail = (value) => {
    console.log('VALID : ', validateEmail(value));
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
    console.log('VALID : ', validatePassword(value));
    setPassword(value);
    if (validatePassword(value)) {
      setPasswordIsValid(true);
    } else if (value.length === 0) {
      setPasswordIsValid(null);
    } else {
      setPasswordIsValid(false);
    }
  };

  return (
    <Window>
      <Icon />
      <h1 className={styles.title}>Sign in</h1>
      <Input
        type="email"
        value={email}
        onChange={(e) => handleInputEmail(e.target.value)}
        placeholder="Email Address *"
        color={emailIsValid === null ? '' : emailIsValid ? 'green' : 'red'}></Input>
      <Input
        type="password"
        value={password}
        onChange={(e) => handleInputPassword(e.target.value)}
        placeholder="Password * "
        color={passwordIsValid === null ? '' : passwordIsValid ? 'green' : 'red'}></Input>
      <Checkbox>Remember me</Checkbox>
      <SubmitButton>SIGN IN</SubmitButton>
    </Window>
  );
};

export default Login;
