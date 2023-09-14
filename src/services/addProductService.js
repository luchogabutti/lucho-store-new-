export const addProducts = async (newProduct) => {
    const response = await fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProduct)
      })

    if (response.status === 200) {
      return await response.json();
    }

    throw new Error('HA ocurrido un error')
} 
