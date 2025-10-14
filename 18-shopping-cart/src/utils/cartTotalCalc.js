export function cartTotalCalc(cartItems = []) {
  const totalProductCount = cartItems.length;

  // Total quantity of all items
  const totalCartItem = cartItems.reduce(
    (acc, currItem) => acc + (currItem.quantity || 0),
    0
  );

  // Total price of all items
  const totalCartAmount = cartItems.reduce(
    (acc, currItem) => acc + currItem.price * (currItem.quantity || 1),
    0
  );

  return { totalProductCount, totalCartItem, totalCartAmount };
}
