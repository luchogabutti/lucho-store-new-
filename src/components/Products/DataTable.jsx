import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useState, useEffect } from 'react';
import { getProducts } from '../../services/productService';
import { CircularProgress } from '@material-ui/core';
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field:'images',
    headerName: 'Image',
    renderCell: (product) => {
        return <img src={product.row.images[0]}  className='product-image'/>;
    },
    width: 160,
  },
  {
    field: 'title',
    headerName: 'Producto',
    width: 160,
    editable: true,
  },
  {
    field: 'stock',
    headerName: 'Stock',
    width: 150,
    renderCell: (product) => {
      return (
          <>
            <CircularProgress
              variant='determinate'
              disableShrink={true}
              value={product.row.stock}
              style={{
                color:
                  product.row.stock < 25
                    ? "red"
                    : product.row.stock >= 25 && product.row.stock < 50
                    ? "orange"
                    : product.row.stock >= 50 && product.row.stock < 75
                    ? "yellow"
                    : "green"
              }}
            />
          <p className='circular-text'>{product.row.stock}</p>
          </>
        )
    }
  },
  {
    field: 'price',
    headerName: 'Precio (U$D)',
    width: 160,
    type: 'number',
  },
  {
    field: 'rating',
    headerName: 'Rating',
    type: 'number',
    width: 150,
    editable: true,
  },
  {
    field: 'brand',
    headerName: 'Marca',
    width: 160,
  },
];

export default function DataTable() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
    const fetchProducts = async () => {
        try {
            const data = await getProducts();
            setProducts(data.products);
        } catch (error) {
            console.log("Error fetching products:", error);
        }
    };

    fetchProducts();
}, []);


  return (
    <div style={{ height: 500, width: '95%'}}>
      <DataGrid
        rows={products}
        columns={columns}
        pageSize={8}
      />
    </div>
  );
}
