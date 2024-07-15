// components/SignupForm.tsx
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/system';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import PasswordHints from './PasswordHints';
import { theme } from './theme';
import SignUpTitleWithStars from './SignUpTitleWithStars';

interface SignupFormInputs {
  email: string;
  password: string;
}

const GradientButton = styled(Button)({
  background: `linear-gradient(90deg, ${theme.colors.buttonStart} 0%, ${theme.colors.buttonEnd} 100%)`,
  color: '#FFFFFF',
  borderRadius: 25,
  maxWidth: '240px',
});

const GradientBox = styled(Box)({
  background: `linear-gradient(90deg, ${theme.colors.backgroundStart} 0%, ${theme.colors.backgroundEnd} 100%)`,
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const SignupForm = () => {
  const { register, handleSubmit, formState: { errors, dirtyFields, isSubmitted }, watch } = useForm<SignupFormInputs>();

  const onSubmit: SubmitHandler<SignupFormInputs> = data => {
    console.log(data);
  };

  const password = watch('password', '');

  return (
    <GradientBox>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: '300px' }}>
        <SignUpTitleWithStars />
        <EmailInput register={register} errors={errors} />
        <PasswordInput register={register} errors={errors} />
        <PasswordHints password={password} isDirty={!!dirtyFields.password && isSubmitted} />
        <Box mt={2} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <GradientButton type="submit" fullWidth variant="contained" style={{ marginTop: '16px' }}>
            Signup
          </GradientButton>
        </Box>
      </form>
    </GradientBox>
  );
};

export default SignupForm;
