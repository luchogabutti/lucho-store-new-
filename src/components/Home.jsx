import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="style">
            <h1>This is Home Page</h1>
            <Link to='/products'>Go to Products Page</Link>
       </div>
    )
}

export default Home;