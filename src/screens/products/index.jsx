import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './style.css'
import { getProducts } from "../../services/productService";
import { Layout } from "./Layout";
import ContainedButtons from "../../components/AddButton/AddButton";
import GoBackButton from "../../components/GoBackButton";


const Products = () => {

    const [products, setProducts] = useState([]);
    const [skip, setSkip] = useState(0)
    const [pageState, setPageState] = useState({
        isLoading: false,
        data: [],
        total: 0,
        page: 1,
        pageSize: 10,
      })

      useEffect(() => {
        const fetchData = async () => {
            console.log('ON')
            setPageState(old => ({ ...old, isLoading: true }))
            const skip = (pageState.page - 1) * pageState.pageSize;
            setSkip(skip);
            try {
                const data = await getProducts(pageState, skip);
                setPageState(old => ({ ...old, isLoading: false, data: data.data, total: data.total }))
                setProducts(data.products);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }
        fetchData();
    }, [pageState.page, pageState.pageSize]);

    return (
        <div className="style">
            <h1>Product List</h1>
            <div className="little-container">
            <GoBackButton />
            <Link to='/new-product'><ContainedButtons /></Link>
            </div>
            <Layout 
                products={products}
                currentPage={pageState.page}
                pageSize={pageState.pageSize}
                pageState={pageState}
                onPageChange={(newPage) => {
                  setPageState(old => ({ ...old, page: newPage + 1 }))
                }}
                onPageSizeChange={(newPageSize) => setPageState(old => ({ ...old, pageSize: newPageSize }))}
                      />
        </div>
    );
};

export default Products;
