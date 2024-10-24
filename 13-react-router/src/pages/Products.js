import { Link } from 'react-router-dom';

export default function Products() {
  const PRODUCTS = [
    { id: 'p1', title: 'product 1' },
    { id: 'p2', title: 'product 2' },
    { id: 'p3', title: 'product 3' },
  ];

  return (
    <>
      <h1>My Product Products</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
