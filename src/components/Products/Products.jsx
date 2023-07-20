import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './style.css'
import { getProducts } from "../../services/productService";
import DataTable from "./DataTable";

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
            <h1>This is Products Page</h1>
            <Link to='/'>Go to Home Page</Link>
            <DataTable />
        </div>
    );
};

export default Products;
