export default function CartItem({ item, onDeletion }) {
  return (
    <div className='cart-item'>
      <div className='delete-item'>
        <h3>{item.name}</h3>
        <button onClick={() => onDeletion(item.id)}>❌</button>
      </div>
      <p>
        Price: <span style={{ color: 'green' }}>${item.price}</span>
      </p>
      <p>
        Quantity: <span style={{ color: 'green' }}>{item.quantity}</span>{' '}
      </p>
      <p>
        Subtotal:
        <span style={{ color: 'green' }}>
          ${(item.price * item.quantity).toFixed(2)}
        </span>
      </p>
    </div>
  );
}
