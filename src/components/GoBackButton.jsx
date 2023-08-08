import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

export default function GoBackButton() {
    const back = useNavigate()
  return (
    <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={() => back(-1)}>Go Back</Button>
    </Stack>
  );
}
