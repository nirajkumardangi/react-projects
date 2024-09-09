import CartItem from './CartItem';

export default function Cart({
  cartItem,
  onOrderConfirmation,
  orderConfirmation,
  onDeletion,
}) {
  const totalPrice =
    cartItem.length > 0
      ? cartItem.reduce((total, item) => total + item.price * item.quantity, 0)
      : 0;

  return (
    <div className='cart'>
      <h2>Your Cart ({cartItem.length})</h2>

      {cartItem.length > 0 ? (
        <>
          {cartItem.map((item) => (
            <CartItem key={item.id} item={item} onDeletion={onDeletion} />
          ))}
          <div className='order-total'>
            Order total - ${totalPrice.toFixed(2)}
          </div>
          <button className='confirm-order' onClick={onOrderConfirmation}>
            Confirm Order
          </button>
        </>
      ) : orderConfirmation ? (
        <h2>Order successful ✔</h2>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
}
