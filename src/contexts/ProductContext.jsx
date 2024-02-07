import React, { createContext, useContext } from 'react';
import { useFetchData } from '../hooks/useFetchData';
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
	const { data: products, loading, error } = useFetchData("/products");

	return (
		<ProductContext.Provider value={{ products, loading, error }}>
			{children}
		</ProductContext.Provider>
	);
}

export default ProductProvider;
// create ahook to use the product context
export const useProducts = () => {
	return useContext(ProductContext);
}