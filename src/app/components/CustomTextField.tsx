import React from 'react';
import { OutlinedTextFieldProps, styled } from '@mui/material';
import { TextField } from '@mui/material';
import { theme } from './theme';
import { forwardRef } from 'react';

interface CustomTextFieldProps extends OutlinedTextFieldProps {
  customColor?: string;
  customBorderColor?: string;
}

const CustomTextField = styled((props: CustomTextFieldProps) => (
  <TextField {...props} InputLabelProps={{ shrink: false }} variant="outlined" />
))<CustomTextFieldProps>(({ customColor, customBorderColor }) => ({
  '& .MuiInputBase-input': {
    paddingTop: `${theme.typography.lineHeight / 2}px`,
    paddingBottom: `${theme.typography.lineHeight / 2}px`,
    paddingLeft: '12px',
    paddingRight: '12px',
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',
    color: customColor,
  },
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',
    '& fieldset': {
      borderColor: customBorderColor,
      borderRadius: '10px',
    },
    '&:hover fieldset': {
      borderColor: customBorderColor,
    },
    '&.Mui-focused fieldset': {
      borderColor: customBorderColor,
    },
  },
}));

export default forwardRef((props: CustomTextFieldProps, ref) => (
  <CustomTextField inputRef={ref} {...props} />
));