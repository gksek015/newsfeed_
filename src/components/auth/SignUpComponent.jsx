import React, { useRef, useState } from 'react';
import { StyledForm, Container, Label, InputWrapper, Input, Button, ButtonContainer, Span } from '../../styles/signup';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabase/supabaseClient';
import { HeaderContainer, Logo } from '../../styles/header';

const SignUpComponent = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const nicknameRef = useRef();
  const navigate = useNavigate();

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [nicknameError, setNicknameError] = useState('');

      // 이메일 유효성 검사
  const handleEmailChange = () => {
    const email = emailRef.current.value.trim();
    if (email && (!email.includes('@') || !email.endsWith('.com'))) {
      setEmailError('유효한 이메일 형식으로 입력해주세요.');
    } else {
      setEmailError('');
    }
  };

  // 비밀번호 유효성 검사
  const handlePasswordChange = () => {
    const password = passwordRef.current.value;
    if (password && password.length < 6) {
      setPasswordError('비밀번호는 최소 6자 이상이어야 합니다.');
    } else {
      setPasswordError('');
    }
  };

  // 비밀번호 확인 유효성 검사
  const handleConfirmPasswordChange = () => {
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    if (confirmPassword && password !== confirmPassword) {
      setConfirmPasswordError('비밀번호가 일치하지 않습니다.');
    } else {
      setConfirmPasswordError('');
    }
  };

  // 회원가입 처리
  const handleSignup = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    const nickname = nicknameRef.current.value.trim();

    let isValid = true;

    // 닉네임 유효성 검사
    if (nickname && !nicknameError) {
      setNicknameError('');
    } else if (!nickname) {
      setNicknameError('닉네임을 입력해주세요.');
      isValid = false;
    }

    // 이메일 유효성 검사
    if (email && (!email.includes('@') || !email.endsWith('.com'))) {
      setEmailError('유효한 이메일 형식으로 입력해주세요.');
      isValid = false;
    } else if (!email) {
      setEmailError('');
    }

    // 비밀번호 유효성 검사
    if (password && password.length < 6) {
      setPasswordError('비밀번호는 최소 6자 이상이어야 합니다.');
      isValid = false;
    } else if (!password) {
      setPasswordError('');
    }

    // 비밀번호 확인 유효성 검사
    if (confirmPassword && password !== confirmPassword) {
      setConfirmPasswordError('비밀번호가 일치하지 않습니다.');
      isValid = false;
    } else if (!confirmPassword) {
      setConfirmPasswordError('');
    }

    if (!isValid) {
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email: emailRef.current.value,
      password: passwordRef.current.value,
      options: {
        data: {
          nickname: nicknameRef.current.value,
          profile_img_url: 'https://i.pinimg.com/736x/3b/73/a1/3b73a13983f88f8b84e130bb3fb29e17.jpg'
        }
      }
    });

    const userData = await supabase.from('users').insert({
      id: data.user?.id, // 회원가입 성공 시 받아온 data중 id(uid) 값을 가져온다.
      email: data.user?.email,
      created_at: data.user?.created_at,
      nickname: nicknameRef.current.value
    });

    if (error) {
      alert('회원가입 실패: ' + error.message);
      return;
    }

    alert('회원가입이 완료되었습니다!');
    await supabase.auth.signOut();
    navigate('/login');
  };

  return (
    <>
      <HeaderContainer>
        <Logo style={{ margin: '0 auto' }}>Replay</Logo>
      </HeaderContainer>
      <Container>
        <StyledForm onSubmit={handleSignup}>
          <InputWrapper>
            <Label>아이디</Label>
            <Input
            type="email"
            placeholder="이메일을 입력하세요"
            ref={emailRef}
            onChange={handleEmailChange}/>
            {emailError && <Span>{emailError}</Span>}
          </InputWrapper>
          <InputWrapper>
            <Label>비밀번호</Label>
            <Input
            type="password"
            placeholder="비밀번호를 입력하세요"
            ref={passwordRef}
            onChange={handlePasswordChange}/>
            {passwordError && <Span>{passwordError}</Span>}
          </InputWrapper>
          <InputWrapper>
            <Label>비밀번호 확인</Label>
            <Input
            type="password"
            placeholder="비밀번호를 확인하세요"
            ref={confirmPasswordRef}
            onChange={handleConfirmPasswordChange}/>
            {confirmPasswordError && <Span>{confirmPasswordError}</Span>}
          </InputWrapper>
          <InputWrapper>
            <Label>닉네임</Label>
            <Input
            type="text"
            placeholder="닉네임을 입력하세요"
            ref={nicknameRef}
            />
            {nicknameError && <Span>{nicknameError}</Span>}
          </InputWrapper>
          <ButtonContainer>
            <Button type="submit">회원가입</Button>
          </ButtonContainer>
        </StyledForm>
      </Container>
    </>
  );
};

export default SignUpComponent;
