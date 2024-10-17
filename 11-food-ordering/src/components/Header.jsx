import { useContext } from 'react';
import logo from '../assets/logo.jpg';
import Button from '../UI/Button';
import CartContext from '../store/CartContext';

export default function Header() {
  const cartCtx = useContext(CartContext);

  const totalCartItem = cartCtx.items.reduce((totalNumberOfItem, item) => {
    return totalNumberOfItem + item.quantity;
  }, 0);

  return (
    <>
      <header id='main-header'>
        <div id='title'>
          <img src={logo} alt='logo' />
          <h1>order food</h1>
        </div>
        <nav>
          <Button textOnly>Cart ({totalCartItem})</Button>
        </nav>
      </header>
    </>
  );
}
