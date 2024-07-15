import React from 'react';
import { Typography, Box } from '@mui/material';
import { theme } from './theme';
import { Hints, Rules } from './rules';

interface PasswordHintsProps {
  password: string;
  isDirty: boolean;
}

const PasswordHints: React.FC<PasswordHintsProps> = ({ password, isDirty }: { password: string, isDirty: boolean }) => {
  const rules = {
    [Rules.MIN_LENGTH]: password.length >= 8,
    [Rules.MAX_LENGTH]: password.length <= 64,
    [Rules.UPPERCASE]: /[A-Z]/.test(password),
    [Rules.NUMBER]: /\d/.test(password),
  };


  console.log(Object.entries(rules))
  return (
    <Box mt={2}>
      {Object.entries(rules).map(([rule, isValid]) => (
        <Typography key={rule} variant="body2" 
          style={{ color: isDirty ? (isValid ? 'green' : theme.colors.error) : '#4A4E71' }} 
       // style={{ color: isValid ? 'green' : theme.colors.error }}
        >
          {Hints[rule as Rules]}
        </Typography>
      ))}
    </Box>
  );
};

export default PasswordHints;