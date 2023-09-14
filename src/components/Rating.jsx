import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function HalfRating({ productDetail }) {
  return (
    <Stack spacing={1}>
      <Rating name="half-rating-read" defaultValue={0} value={4.26} precision={0.1} readOnly /> 
    </Stack>
  );
}
