function CartSummary() {
  return (
    <>
      <div className='bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 mb-4'>
        <div className='flex justify-between mb-2 text-white'>
          <span>Subtotal</span>
          <span className='font-semibold'>₹55,496</span>
        </div>
        <div className='flex justify-between mb-2 text-white'>
          <span>Discount</span>
          <span className='font-semibold text-green-300'>-₹999</span>
        </div>
        <div className='border-t border-white/30 pt-2 mt-2'>
          <div className='flex justify-between text-white'>
            <span className='text-lg font-bold'>Total</span>
            <span className='text-2xl font-bold'>₹54,497</span>
          </div>
        </div>
      </div>

      <button className='w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg'>
        Checkout Now
      </button>
    </>
  );
}

export default CartSummary;
