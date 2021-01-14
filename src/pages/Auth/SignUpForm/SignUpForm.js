import AuthForm from 'components/AuthForm';
import React from 'react';

const SignUpForm = () => {
  return (
    <AuthForm>
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
