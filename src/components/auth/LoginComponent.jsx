import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonContainer, Container, Input, InputWrapper, Label, StyledForm } from '../../styles/login';
import { signIn } from '../../api/auth';
import { HeaderContainer, Logo } from '../../styles/header';
import { Span } from '../../styles/signup';


const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');


  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!value) {
      setEmailError('');
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      setEmailError('올바른 이메일 형식이 아닙니다.');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (value) {
      setPasswordError('');
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError('이메일을 올바르게 입력해주세요.');
      return;
    }

    if (!password) {
      setPasswordError('비밀번호를 입력해주세요.');
      return;
    }
  
    try {
      await signIn({ email, password });
      alert('로그인이 완료되었습니다.');

    } catch (error) {
      alert('로그인 실패: 이메일 또는 비밀번호가 올바르지 않습니다.');
    }
  };

  return (
    <>
    <HeaderContainer>
    <Logo style={{margin:'0 auto'}}>Replay</Logo>
    </HeaderContainer>
    <Container>
      <StyledForm onSubmit={handleLogin}>
        <InputWrapper>
          <Label>아이디</Label>
          <Input
            type="email"
            placeholder="이메일을 입력해주세요"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <Span>{emailError}</Span>}
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && <Span>{passwordError}</Span>}
        </InputWrapper>
        <ButtonContainer>
          <Link to="/signup">
            <Button type="button">회원가입</Button>
          </Link>
          <Button type="submit">
            로그인
          </Button>
        </ButtonContainer>
      </StyledForm>
    </Container>
    </>
  );
};

export default LoginComponent;
