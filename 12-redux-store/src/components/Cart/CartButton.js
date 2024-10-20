import { useDispatch, useSelector } from 'react-redux';

import classes from './CartButton.module.css';
import { toggle } from '../../redux/ui-slice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector(state => state.cart.totalQuantity);

  function toggleHandler() {
    dispatch(toggle());
  }

  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
