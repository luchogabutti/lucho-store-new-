import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import GoBackButton from '../../components/GoBackButton';
import './style.css'
import CreateProductButton from '../../components/CreateProductButton';
import { addProducts } from '../../services/addProductService';


export default function NewProductForm() {

  const [inputs, setInputs] = useState({})

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await addProducts(inputs);
      console.log(result)
      alert('Producto creado con éxito');
      window.location.href = '/products'
    } catch (error) {
      alert('Ha ocurrido un problema: Error')
    }
  }


  return (
    <>
    <h1>Create a new product</h1>
    <div className='go-back'>
      <GoBackButton/>
    </div>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '60ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className='form'>
        <TextField
          id="outlined-multiline-flexible"
          label="Product Name"
          name="name"
          multiline
          maxRows={4}
          required
          value={inputs.name || ""} 
          onChange={handleChange}
        />
        <TextField
          id="outlined-multiline-static"
          label="Description"
          name='description'
          multiline
          rows={4}
          value={inputs.description || ""}
          onChange={handleChange}
        />
         <TextField
          id="outlined-textarea"
          label="Price"
          placeholder="Price"
          name='price'
          multiline
          required
          value={inputs.price || ""} 
          onChange={handleChange}
        />
         <TextField
          id="outlined-textarea"
          label="Discount Porcentage"
          placeholder="%"
          name='discount'
          multiline
          value={inputs.discount|| ""} 
          onChange={handleChange}
        />
         <TextField
          id="outlined-textarea"
          label="Stock"
          placeholder="Stock"
          multiline
          name='stock'
          required
          value={inputs.stock || ""} 
          onChange={handleChange}
        />
        <CreateProductButton className='create-button' onClick={handleSubmit}/>
      </div>
    </Box>
    </>
  );
}