import { ShoppingCart } from 'lucide-react';
import { cartTotalCalc } from '../../utils/cartTotalCalc';
import { currencyFormatter } from '../../utils/currencyFormat';
import { discountCalc } from '../../utils/discountCalc';

function CartSummaryBar({ cartItems }) {
  const { totalCartAmount, totalProductCount } = cartTotalCalc(cartItems);
  const discount = discountCalc(cartItems);

  return (
    <div className='bg-white/20 backdrop-blur-lg rounded-3xl p-6 mb-8 border border-white/30 shadow-2xl'>
      <div className='flex items-center justify-between flex-wrap gap-4'>
        <div className='flex items-center gap-4'>
          <div className='relative'>
            <ShoppingCart className='w-10 h-10 text-white' />
            <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center'>
              {totalProductCount}
            </span>
          </div>
          <div>
            <p className='text-white/80 text-sm font-medium'>Items in Cart</p>
            <p className='text-3xl font-bold text-white'>
              {totalProductCount} Products
            </p>
          </div>
        </div>
        <div className='text-right'>
          <p className='text-white/80 text-sm font-medium'>Total Amount</p>
          <p className='text-3xl font-bold text-white'>
            {currencyFormatter(totalCartAmount - discount)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartSummaryBar;
