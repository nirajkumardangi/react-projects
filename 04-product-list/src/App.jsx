import { useState } from 'react';
import Cart from './components/Cart';
import MenuGrid from './components/MenuGrid';
import MenuItem from './components/MenuItem';
import { desserts } from './data';

function App() {
  const [cartItem, setCartItem] = useState([]);
  const [orderConfirmation, setOrderConfirmation] = useState(false);

  function handleCart(id) {
    const selectedItem = desserts.find((cart) => cart.id === id);
    console.log(selectedItem);

    if (selectedItem) {
      setCartItem((currentItems) => {
        const itemInCart = currentItems.find((item) => item.id === id);

        // If item is already in the cart, increase its quantity
        if (itemInCart) {
          return currentItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          );
        }

        // If the item is not in the cart, add it with quantity 1
        return [...currentItems, { ...selectedItem, quantity: 1 }];
      });
    }
  }

  function handleOrderConfirmation() {
    setOrderConfirmation((order) => !order);

    setCartItem([]);
  }

  function handleCartDeletion(id) {
    setCartItem((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  }

  return (
    <>
      <div className='container'>
        <MenuGrid>
          {desserts.map((dessert) => (
            <MenuItem
              dessert={dessert}
              key={dessert.id}
              handleCart={handleCart}
            />
          ))}
        </MenuGrid>
        <Cart
          cartItem={cartItem}
          onOrderConfirmation={handleOrderConfirmation}
          orderConfirmation={orderConfirmation}
          onDeletion={handleCartDeletion}
        />
      </div>
    </>
  );
}

export default App;
