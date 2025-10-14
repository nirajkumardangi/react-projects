import { cartTotalCalc } from './cartTotalCalc';

export function discountCalc(cartItems) {
  const { totalCartAmount, totalProductCount } = cartTotalCalc(cartItems);

  const discount =
    totalCartAmount >= 5000 || totalProductCount >= 2
      ? Math.floor(totalCartAmount * 0.1)
      : 0;

  return discount;
}
