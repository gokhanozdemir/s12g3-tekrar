import { useEffect, useState } from 'react'
import Product from './components/Product'
import axios from 'axios'
import './App.css'

function App() {
  const [products, setProducts] = useState([])

  const [count, setCount] = useState(0)

  const instance = axios.create({
    baseURL: 'https://fakestoreapi.com/products',
    timeout: 1000,
    headers: { 'Secret-Custom-Header': 'token' }
  });

  useEffect(() => {
    instance
      .then(function (response) {
        // handle successsetProducts(json)
        setProducts(response.data)
        console.log(response);

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

  }, [])
  return (
    <>
      <h1>1123 S12G3 Tekrar</h1>

      <ul>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
