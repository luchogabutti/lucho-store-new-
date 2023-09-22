export const getProducts = async (pageState, skip) => {
  const response = await fetch(`https://dummyjson.com/products?page=${pageState.page}&limit=${pageState.pageSize}&skip=${skip}&select=title,price,rating,stock,brand,images,category`);
  const data = await response.json();
  return data;
};



export const getCategories = async () => {
    const response = await fetch('https://dummyjson.com/products/categories');
    const data = await response.json();
    return data;
};

export const getProductDetail = async (productId) => {
  const response = await fetch(`https://dummyjson.com/products/${productId}`);
  const data = await response.json();
  return data;
};

  