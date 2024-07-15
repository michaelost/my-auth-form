import React from 'react';
import { Typography, Box, styled } from '@mui/material';

const SignUpTitleContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  marginBottom: '20px',
});

const SignUpTitle = styled(Typography)({
  fontFamily: 'Inter',
  fontWeight: 700,
  fontSize: '28px',
  lineHeight: '28px',
  textAlign: 'center',
  color: '#4A4E71',
  position: 'relative',
});

const Star = styled('div')({
  position: 'absolute',
  backgroundImage: `url('/star.png')`,
  backgroundSize: 'cover',
  width: '16px',
  height: '16px',
});

const TopLeftStar = styled(Star)({
  top: '-10px',
  left: '80px',
});

const TopRightStar = styled(Star)({
  top: '-100px',
  right: '20px',
});

const BottomLeftStar = styled(Star)({
  bottom: '-10px',
  left: '60px',
});

const SignUpTitleWithStars = () => (
  <SignUpTitleContainer>
    <SignUpTitle>Sign up</SignUpTitle>
    <TopLeftStar />
    <TopRightStar />
    <BottomLeftStar />
  </SignUpTitleContainer>
);

export default SignUpTitleWithStars;