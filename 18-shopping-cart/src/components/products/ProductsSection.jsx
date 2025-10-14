import { Package } from 'lucide-react';
import Product from './Product';

import { PRODUCTS } from '../../utils/data';

function ProductsSection({ onSetCartItem }) {
  return (
    <div className='lg:col-span-2'>
      <div className='bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-xl'>
        <h2 className='text-2xl font-bold text-white mb-6 flex items-center gap-2'>
          <Package className='w-7 h-7' />
          Available Products
        </h2>
        <div className='space-y-4'>
          {PRODUCTS.map((item) => (
            <Product
              key={item.id}
              onSetCartItem={onSetCartItem}
              {...item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsSection;
