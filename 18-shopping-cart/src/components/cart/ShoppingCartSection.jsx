import { ShoppingCart } from 'lucide-react';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import EmptyCart from './EmptyCart';

function ShoppingCartSection({ cartItems = [], onSetCartItem }) {
  return (
    <div className='lg:col-span-1'>
      <div className='bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-xl sticky top-4'>
        <h2 className='text-2xl font-bold text-white mb-6 flex items-center gap-2'>
          <ShoppingCart className='w-7 h-7' />
          Your Cart
        </h2>
        <div className='space-y-3 mb-8'>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              cartItems={cartItems}
              onSetCartItem={onSetCartItem}
              {...item}
            />
          ))}
        </div>

        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <CartSummary cartItems={cartItems} onSetCartItem={onSetCartItem} />
        )}
      </div>
    </div>
  );
}

export default ShoppingCartSection;
