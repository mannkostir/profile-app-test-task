import AuthForm from 'components/AuthForm';
import React from 'react';

const SignInForm = () => {
  return (
    <AuthForm>
      <AuthForm.FormTitle>Sign In</AuthForm.FormTitle>
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
