import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

export default function CreateProductButton(props) {
  return (
    <Stack direction="row" spacing={2}>
        <Link to=''><Button onClick={props.onClick} variant="contained">Create Product</Button></Link>
    </Stack>
  );
}
