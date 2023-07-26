import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './style.css'
import { getProducts } from "../../services/productService";
import { DataTable } from "./Layout";
import AddButton from "../../components/AddButton/addButton";

const Products = () => {

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
        <div className="style">
            <h1>Product List</h1>
            <div className="little-container">
                <Link to='/' className="go-back-text">Go to Home Page</Link>
                <Link to='/new-product'><AddButton /></Link>
            </div>
            <DataTable products={products}/>
        </div>
    );
};

export default Products;
