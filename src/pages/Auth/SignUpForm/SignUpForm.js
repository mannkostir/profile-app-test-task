import AuthForm from 'components/AuthForm';
import { useAuthContext } from 'context/AuthContext';
import { useAPI } from 'hooks/useAPI';
import React from 'react';

const SignUpForm = () => {
  const api = useAPI();
  const { signIn } = useAuthContext();

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
      console.error(e);
    }
  };

  return (
    <AuthForm onSubmit={handleSignUp}>
      <AuthForm.FormTitle>Sign Up</AuthForm.FormTitle>
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
      />
      <AuthForm.SubmitButton>Sign In</AuthForm.SubmitButton>
    </AuthForm>
  );
};

export default SignUpForm;
