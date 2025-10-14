import { ShoppingCart } from 'lucide-react';

function EmptyCart() {
  return (
    <div className='bg-white/20 backdrop-blur-sm rounded-xl p-8 text-center border border-white/30'>
      <ShoppingCart className='w-16 h-16 text-white/50 mx-auto mb-3' />
      <p className='text-white text-lg'>Your cart is empty</p>
      <p className='text-white/70 text-sm mt-2'>
        Add some products to get started!
      </p>
    </div>
  );
}

export default EmptyCart;
