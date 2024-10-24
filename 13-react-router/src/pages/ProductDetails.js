import { useParams, Link } from 'react-router-dom';

export default function ProductDetails() {
  const { productId } = useParams();

  return (
    <div>
      <b>ProductDetails</b>
      <p>Products ID: {productId}</p>
      <p>
        <Link to='..' relative='path'>Back</Link>
      </p>
    </div>
  );
}
