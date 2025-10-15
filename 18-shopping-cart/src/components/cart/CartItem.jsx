import { Trash2, Plus, Minus } from 'lucide-react';
import { currencyFormatter } from '../../utils/currencyFormat';

function CartItem({
  id,
  image,
  name,
  price,
  quantity,
  cartItems,
  onSetCartItem,
}) {
  // Remove from Cart Function
  function removeFromCart(productId) {
    onSetCartItem(cartItems.filter((item) => item.id !== productId));
  }

  // Increase Quantity Function
  function increaseQuantity(productId) {
    onSetCartItem(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  // Decrease Quantity Function
  function decreaseQuantity(productId) {
    const item = cartItems.find((item) => item.id === productId);

    if (item.quantity > 1) {
      onSetCartItem(
        cartItems.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } else {
      removeFromCart(productId);
    }
  }

  return (
    <>
      <div className='bg-white rounded-xl p-4 shadow-lg'>
        <div className='flex gap-3 mb-3'>
          <div className='w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center text-white text-2xl flex-shrink-0'>
            {image}
          </div>
          <div className='flex-1 min-w-0'>
            <h3 className='font-bold text-gray-800 truncate'>{name}</h3>
            <p className='text-indigo-600 font-semibold'>
              {currencyFormatter(price)}
            </p>
          </div>
          <button
            onClick={() => removeFromCart(id)}
            className='text-red-500 hover:text-red-700 transition-colors flex-shrink-0 cursor-pointer'
          >
            <Trash2 className='w-5 h-5' />
          </button>
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <button
              onClick={() => decreaseQuantity(id)}
              className='w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center transition-colors cursor-pointer'
            >
              <Minus className='w-4 h-4 text-gray-700' />
            </button>
            <span className='text-lg font-bold text-gray-800 w-8 text-center'>
              {quantity}
            </span>
            <button
              onClick={() => increaseQuantity(id)}
              className='w-8 h-8 bg-indigo-600 hover:bg-indigo-700 rounded-lg flex items-center justify-center transition-colors cursor-pointer'
            >
              <Plus className='w-4 h-4 text-white' />
            </button>
          </div>
          <span className='text-lg font-bold text-gray-800'>
            {currencyFormatter(quantity * price)}
          </span>
        </div>
      </div>
    </>
  );
}

export default CartItem;
