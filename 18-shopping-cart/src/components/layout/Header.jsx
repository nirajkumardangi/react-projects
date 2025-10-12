import { Package } from 'lucide-react';

function Header() {
  return (
    <div className='text-center mb-8 animate-fade-in'>
      <h1 className='text-5xl md:text-6xl font-bold text-white mb-2 drop-shadow-lg flex items-center justify-center gap-3'>
        <Package className='w-12 h-12 md:w-16 md:h-16' />
        ShopEase Store
      </h1>
      <p className='text-white/90 text-lg'>
        Discover amazing products at great prices
      </p>
    </div>
  );
}

export default Header;
