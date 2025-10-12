import CartSummary from './components/cart/CartSummary';
import CartSummaryBar from './components/cart/CartSummaryBar';
import ShoppingCartSection from './components/cart/ShoppingCartSection';
import Header from './components/layout/Header';
import ProductsSection from './components/products/ProductsSection';
import './styles/App.css';

function App() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4 md:p-8'>
      <div className='max-w-7xl mx-auto'>
        <Header />
        <CartSummaryBar />
        <div className='grid lg:grid-cols-3 gap-6'>
          <ProductsSection />
          <ShoppingCartSection />
          <CartSummary />
        </div>
      </div>
    </div>
  );
}

export default App;
