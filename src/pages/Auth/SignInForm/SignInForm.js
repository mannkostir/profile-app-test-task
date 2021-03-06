import AuthForm from 'components/AuthForm';
import ErrorMessage from 'components/ErrorMessage';
import { useAuthContext } from 'context/AuthContext';
import { useAPI } from 'hooks/useAPI';
import React, { useState } from 'react';

const SignInForm = () => {
  const api = useAPI();
  const { signIn } = useAuthContext();

  const [error, setError] = useState({});

  const handleSignIn = async (values) => {
    try {
      const userData = await api.signIn({
        username: values.username,
        password: values.password,
      });

      signIn({ userId: userData.userId, username: userData.username });
    } catch (e) {
      setError(e);
    }
  };

  return (
    <AuthForm onSubmit={handleSignIn}>
      <AuthForm.FormTitle>Sign In</AuthForm.FormTitle>
      <ErrorMessage>{error.message}</ErrorMessage>
      <AuthForm.UsernameInput
        validatorRules={{ hasLength: { min: 4, max: 16 } }}
        required={true}
      />
      <AuthForm.PasswordInput
        validatorRules={{ hasLength: { min: 4, max: 16 } }}
        required={true}
      />
      <AuthForm.SubmitButton>Sign In</AuthForm.SubmitButton>
    </AuthForm>
  );
};

export default SignInForm;
