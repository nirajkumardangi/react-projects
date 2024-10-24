import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const { productId } = useParams();

  return (
    <div>
      <b>ProductDetails</b>
      <p>Products ID: {productId}</p>
    </div>
  );
}
