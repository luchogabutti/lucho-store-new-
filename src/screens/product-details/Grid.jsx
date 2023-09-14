import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { CircularProgress } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import './style.css'
import Rating from '@mui/material/Rating';
import HalfRating from '../../components/Rating';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ColumnsGrid({ productDetail }) {
  return (
    <Grid container spacing={2} width='90%' margin='auto'>
      <Grid md={7.5} >
          <img src={productDetail.thumbnail} alt="" className='img-container'/>
      </Grid>
      <Grid md={3} padding='15px'>
          <div className="product-atributes">
          <Typography gutterBottom variant="h3">
            {productDetail.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {productDetail.description}
          </Typography>
              <div className="stock-props">
              <Typography variant='h5'>Stock: {productDetail.stock} </Typography>
              <CircularProgress 
                  variant='determinate'
                  disableShrink={true}
                  value={productDetail.stock}
                  style={{
                  color:
                      productDetail.stock < 25
                      ? "red"
                      : productDetail.stock >= 25 && productDetail.stock < 50
                      ? "orange"
                      : productDetail.stock >= 50 && productDetail.stock < 75
                      ? "yellow"
                      : "green"
                  }}
              />
              </div>
              <Typography variant='h5'>${productDetail.price}</Typography>
              <Typography variant='h5'>Brand: {productDetail.brand}</Typography>
              <Typography variant='h5'>Category: {productDetail.category}</Typography>
              <Typography variant='h5'> Rating:
                <HalfRating productDetail={productDetail} />
              </Typography>
              <Typography variant='h5'>{productDetail.discountPercentage}% OFF</Typography>
          </div>
      </Grid>
    </Grid>
  );
}
