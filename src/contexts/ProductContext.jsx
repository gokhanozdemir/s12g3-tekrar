import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const instance = axios.create({
		baseURL: 'https://fakestoreapi.com/products',
		timeout: 2000,
		headers: { 'Secret-Custom-Header': 'token' }
	});

	useEffect(() => {
		instance.get('/')
			.then(function (response) {
				// handle successsetProducts(json)
				setProducts(response.data)
				console.log(response);

			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
	}, []);

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