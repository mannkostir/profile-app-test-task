import AuthForm from 'components/AuthForm';
import ErrorMessage from 'components/ErrorMessage';
import { useAuthContext } from 'context/AuthContext';
import { useAPI } from 'hooks/useAPI';
import React, { useState } from 'react';

const SignUpForm = () => {
  const api = useAPI();
  const { signIn } = useAuthContext();

  const [error, setError] = useState({});

  const handleSignUp = async (values) => {
    try {
      await api.signUp({
        username: values.username,
        password: values.password,
      });

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
    <AuthForm onSubmit={handleSignUp}>
      <AuthForm.FormTitle>Sign Up</AuthForm.FormTitle>
      <ErrorMessage>{error.message}</ErrorMessage>
      <AuthForm.UsernameInput
        validatorRules={{ hasLength: { min: 4, max: 16 } }}
        required={true}
      />
      <AuthForm.PasswordInput
        validatorRules={{ hasLength: { min: 4, max: 16 } }}
        required={true}
      />
      <AuthForm.PasswordInput
        name="passwordConfirm"
        validatorRules={{ hasLength: { min: 4, max: 16 } }}
        required={true}
        placeholder="Confirm your password"
      />
      <AuthForm.SubmitButton>Sign In</AuthForm.SubmitButton>
    </AuthForm>
  );
};

export default SignUpForm;
