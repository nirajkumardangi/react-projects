export default function Amount({ title, amount }) {
  return (
    <div className='total'>
      <div className='title'>
        <p className='title-text'>{title}</p>
        <p className='title-person'>/&nbsp;person</p>
      </div>
      <div className='amount'>${amount.toFixed(2)}</div>
    </div>
  );
}
