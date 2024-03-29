import { useState } from 'react'
import Product from './components/Product'
import './App.css'
import { useProducts } from './contexts/ProductContext'
function App() {
  const { products, loading, error } = useProducts()
  const [count, setCount] = useState(0)


  return (
    <>
      <h1>1123 S12G3 Tekrar</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
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
