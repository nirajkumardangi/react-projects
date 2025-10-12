import { ShoppingCart } from 'lucide-react';
import CartItem from './CartItem';

function ShoppingCartSection() {
  return (
    <div className='lg:col-span-1'>
      <div className='bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-xl sticky top-4'>
        <h2 className='text-2xl font-bold text-white mb-6 flex items-center gap-2'>
          <ShoppingCart className='w-7 h-7' />
          Your Cart
        </h2>
        <div className='space-y-3 mb-6'>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartSection;
