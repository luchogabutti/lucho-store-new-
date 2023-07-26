import React from "react";
import { Link } from "react-router-dom";

const NewProduct = () => {
    return (
        <div>
            <h1>New Product Page</h1>
            <h3>Create New Product</h3>
            <Link to='/Products'>Go Back</Link>
        </div>
    )
}

export default NewProduct