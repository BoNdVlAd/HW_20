import React from 'react';
import styled from 'styled-components';
import styles from './Login.module.scss';
import Icon from '../../components/Icon';
import Input from '../../components/Input';
import SubmitButton from '../../components/SubmitButton';
import Window from '../../components/Window';
import Flex from './../../components/Flex';

const Login = () => {
  const saveRef = React.useRef();
  const [email, setEmail] = React.useState('');
  const [emailIsValid, setEmailIsValid] = React.useState(null);

  const [password, setPassword] = React.useState('');
  const [passwordIsValid, setPasswordIsValid] = React.useState(null);

  const handleInputEmail = (value) => {
    setEmail(value);
  };

  const handleInputPassword = (value) => {
    setPassword(value);
  };

  const handleLogin = () => {
    if (saveRef.current.checked) {
      localStorage.setItem('savedData', [email, password]);
    }
  };

  React.useEffect(() => {
    if (localStorage.getItem('savedData')) {
      setEmail(localStorage.getItem('savedData').split(',')[0]);
      setPassword(localStorage.getItem('savedData').split(',')[1]);
    }
  }, []);

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
        type="text"
        value={password}
        onChange={(e) => handleInputPassword(e.target.value)}
        placeholder="Password * "
        color={passwordIsValid === null ? '' : passwordIsValid ? 'green' : 'red'}></Input>
      <Flex>
        <input ref={saveRef} type="checkbox"></input>
        Remember me
      </Flex>
      <SubmitButton
        className={email.length && password.length ? '' : 'disabled'}
        onClick={handleLogin}>
        SIGN IN
      </SubmitButton>
    </Window>
  );
};

export default Login;
// .match(/^(\w{3,})@\w(\w{1,})\.\w(\w{1,})$/);
