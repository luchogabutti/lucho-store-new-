export const updateProduct = async (productId, updatedData) => {
    const response = await fetch(`https://dummyjson.com/products/${productId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedData)
    });
  
    if (response.status === 200) {
      return response.json();
    }
  
    throw new Error('Error en el Service');
  }
  