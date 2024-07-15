import React, { useState, MouseEvent } from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { theme } from './theme';
import { ValidationErrors } from './validationErrors';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import CustomTextField from './CustomTextField';

interface PasswordInputProps {
  register: UseFormRegister<any>;
  errors: FieldErrors;
}

const PasswordInput = ({ register, errors }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <CustomTextField
      type={showPassword ? 'text' : 'password'}
      variant="outlined"
      fullWidth
      margin="normal"
      {...register('password', {
        required: ValidationErrors.REQUIRED,
        minLength: {
          value: 8,
          message: ValidationErrors.PASSWORD_MIN_LENGTH,
        },
        maxLength: {
          value: 64,
          message: ValidationErrors.PASSWORD_MAX_LENGTH,
        },
        pattern: {
          value: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
          message: ValidationErrors.PASSWORD_PATTERN,
        },
      })}
      error={!!errors.password}
      helperText={errors.password ? errors.password.message?.toString() : ''}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      InputLabelProps={{
        style: {
          color: theme.colors.primary,
        },
      }}
    />
  );
};

export default PasswordInput;
