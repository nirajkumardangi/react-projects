import { replaceCart } from './cart-slice';
import { showNotification } from './ui-slice';

export function fetchCartData() {
  return async (dispatch) => {
    async function fetchData(params) {
      const response = await fetch(
        'https://http-request-e8202-default-rtdb.firebaseio.com/cart.json'
      );

      if (!response) {
        throw new Error('Failed to fetch data!');
      }

      const data = await response.json();
      return data;
    }

    try {
      const cartData = await fetchData();
      dispatch(
        replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching cart data failed!',
        })
      );
    }
  };
}

export function sendCartData(cart) {
  return async (dispatch) => {
    dispatch(
      showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      })
    );

    async function sendRequest() {
      const response = await fetch(
        'https://http-request-e8202-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response) {
        throw new Error('Sending cart data failed!');
      }
    }

    try {
      await sendRequest();
      dispatch(
        showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Send cart data successfully!',
        })
      );
    } catch (error) {
      dispatch(
        showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      );
    }
  };
}
