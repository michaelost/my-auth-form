import React from 'react';
import { TextField } from '@mui/material';
import { theme } from './theme';
import { ValidationErrors } from './validationErrors';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import styled from '@emotion/styled/macro';
import CustomTextField from './CustomTextField';

interface EmailInputProps {
  register: UseFormRegister<any>;
  errors: FieldErrors;
}

const EmailInput = ({ register, errors }: EmailInputProps) => {
  return (
    <CustomTextField
      customBorderColor={theme.colors.primary}
      customColor={theme.colors.primary}
      variant="outlined"
      fullWidth
      {...register('email', {
        required: ValidationErrors.REQUIRED,
        pattern: {
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          message: ValidationErrors.INVALID_EMAIL,
        },
      })}
      error={!!errors.email}
      helperText={errors.email ? errors.email.message?.toString() : ''}
    />
  );
};

export default EmailInput;
