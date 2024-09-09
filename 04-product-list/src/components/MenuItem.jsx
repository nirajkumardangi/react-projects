import cartIcon from '../assets/images/icon-add-to-cart.svg';

export default function MenuItem({ dessert, handleCart }) {
  const { images, action, type, name, price } = dessert;

  return (
    <div className='menu-item'>
      <img src={images.desktop} alt={name} />
      <button className='add-to-cart' onClick={() => handleCart(dessert.id)}>
        <img src={cartIcon} alt='cart icon' />
        <span>{action}</span>
      </button>
      <p>{type}</p>
      <h2>{name}</h2>
      <p className='price'>${price}</p>
    </div>
  );
}
