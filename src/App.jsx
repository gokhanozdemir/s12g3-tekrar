import { useEffect, useState } from 'react'
import Product from './components/Product'
import './App.css'

function App() {
  const [products, setProducts] = useState([])

  const [count, setCount] = useState(0)
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json))
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
