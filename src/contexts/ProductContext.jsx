import React, { createContext, useContext } from 'react';
import { useFetchData } from '../hooks/useFetchData';
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
	const { data: products, loading, error } = useFetchData("/products");

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error!</p>;


	return (
		<ProductContext.Provider value={products}>
			{children}
		</ProductContext.Provider>
	);
}

export default ProductProvider;
// create ahook to use the product context
export const useProducts = () => {
	return useContext(ProductContext);
}