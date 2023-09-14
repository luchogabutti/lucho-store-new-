import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

export default function ContainedButtons() {
  return (
    <Stack direction="row" spacing={2}>
        <Link to='/new-product'><Button variant="contained">+ New Product</Button></Link>
    </Stack>
  );
}