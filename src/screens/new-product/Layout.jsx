import * as React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import GoBackButton from '../../components/GoBackButton';
import './style.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useEffect } from 'react';
import { addProducts } from '../../services/addProductService';
import { updateProduct } from '../../services/updateProductService';


export default function NewProductForm () {

  const { id: productId } = useParams();
  const [inputs, setInputs] = useState({})

  useEffect(() => {
    if (productId) {
      fetchProductDetails(productId);
    }
  }, [productId]);

  const fetchProductDetails = async (productId) => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${productId}`);
      const data = await response.json();
      setInputs(data); 
    } catch (error) {
      console.error('Error', error);
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (productId) {
        await updateProduct(productId, inputs)
        alert('Producto editado con éxito')
      } else {
        await addProducts(inputs)
        alert('Producto creado con éxito')
      }
      window.location.href = '/products';
    } catch (error) {
      console.error('Error:', error);
      alert('Ha ocurrido un problema');
      window.location.href = '/products';
    }
  };

  return (
    <>
      <h1>{productId ? `Edit Product #${productId}` : 'Create a new product'}</h1>
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
          maxRows={4}
          required
          value={inputs.name || ''} 
          onChange={handleChange}
        />
        <TextField
          id="outlined-multiline-static"
          label="Description"
          name="description"
          multiline
          rows={4}
          value={inputs.description || ""}
          onChange={handleChange}
        />
         <TextField
          id="outlined-textarea"
          label="Price"
          placeholder="Price"
          name="price"
          multiline
          type="number"
          required
          value={inputs.price || ""} 
          onChange={handleChange}
        />
         <TextField
          id="outlined-textarea"
          label="Add Discount Porcentage"
          type="number"
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
          type="number"
          multiline
          name='stock'
          required
          value={inputs.stock || ""} 
          onChange={handleChange}
        />

        <Stack direction="row" spacing={2}>
            <Button onClick={handleSubmit} variant="contained">{ productId ? 'Edit Product' : 'Create Product' }</Button>
        </Stack>
    
      </div>
    </Box>
    </>
  );
}
