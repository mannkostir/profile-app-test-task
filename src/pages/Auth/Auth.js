import React, { useState } from 'react';
import {
  AuthWrapper,
  ButtonsWrapper,
  SignInButton,
  SignUpButton,
} from './Auth.styles';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <AuthWrapper>
      <ButtonsWrapper>
        <SignUpButton onClick={() => setIsSignUp(true)}>Sign Up</SignUpButton>
        <SignInButton onClick={() => setIsSignUp(false)}>Sign In</SignInButton>
      </ButtonsWrapper>
      {isSignUp ? <SignUpForm /> : <SignInForm />}
    </AuthWrapper>
  );
};

export default Auth;
