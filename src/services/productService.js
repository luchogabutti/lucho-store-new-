export const getProducts = async () => {
    const response = await fetch('https://dummyjson.com/products?limit=24&select=title,price,rating,stock,brand,images');
    const data = await response.json();
    return data;
  };
  