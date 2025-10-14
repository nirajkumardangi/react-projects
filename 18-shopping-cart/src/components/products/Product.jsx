import { Plus, Heart, Star } from 'lucide-react';
import { currencyFormatter } from '../../utils/currencyFormat';

function Product({
  id,
  image,
  name,
  price,
  currency,
  rating,
  description,
  liked,
  onSetCartItem,
}) {
  function addToCart(product) {
    onSetCartItem((prevCart) => {
      // Check if product already exists in cart
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        // If exists → increase quantity
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If not exists → add new item with quantity = 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  }

  return (
    <div className='bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 animate-slide-up'>
      <div className='flex gap-4'>
        <div className='w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-white text-3xl font-bold flex-shrink-0'>
          {image}
        </div>
        <div className='flex-1'>
          <div className='flex items-start justify-between mb-2'>
            <div>
              <h3 className='text-xl font-bold text-gray-800'>{name}</h3>
              <div className='flex items-center gap-1 text-yellow-500 text-sm mt-1'>
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <Star
                      key={index}
                      className={`w-4 h-4 ${
                        index < rating ? 'fill-current' : ''
                      }`}
                    />
                  ))}
                <span className='text-gray-600 ml-1'>({rating}.0)</span>
              </div>
            </div>
            <button className='text-pink-500 hover:text-pink-700 transition-colors'>
              <Heart
                className={`w-6 h-6 cursor-pointer ${
                  liked ? 'fill-current' : ''
                }`}
              />
            </button>
          </div>
          <p className='text-gray-600 text-sm mb-3'>{description}</p>
          <div className='flex items-center justify-between'>
            <span className='text-2xl font-bold text-indigo-600'>
              {currencyFormatter(price)}
            </span>
            <button
              onClick={() => addToCart({ id, image, name, price, currency })}
              className='bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 flex items-center gap-2 cursor-pointer'
            >
              <Plus className='w-5 h-5' />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
