import { useEffect, useState } from 'react';
import axios from 'axios';
const instance = axios.create({
	baseURL: 'https://fakestoreapi.com/',
	timeout: 2000,
	headers: { 'Secret-Custom-Header': 'token' }
});

// create a custom hook to fetch data with loading and error states
export const useFetchData = (url) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		instance.get(url)
			.then((response) => {
				setData(response.data);
				setLoading(false);
			})
			.catch((error) => {
				setError(error);
				setLoading(false);
			});
	}, [url]);

	return { data, loading, error };
};


