import React, { useState } from 'react';
import { AuthWrapper } from './Auth.styles';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <AuthWrapper>
      <div>
        <button onClick={() => setIsSignUp(true)}>Sign Up</button>
        <button onClick={() => setIsSignUp(false)}>Sign In</button>
      </div>
      {isSignUp ? <SignUpForm /> : <SignInForm />}
    </AuthWrapper>
  );
};

export default Auth;
