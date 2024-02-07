
function Product({ product }) {
	return (
		<li key={product.id}>{product.title}</li>
	)
}

export default Product