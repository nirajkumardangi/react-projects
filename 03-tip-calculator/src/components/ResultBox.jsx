import Amount from './Amount';

export default function ResultBox({ tipAmountPerPerson, totalPerPerson, onReset }) {
  return (
    <div className='result-box'>
      <div className='title-box'>
        <Amount title='Tip Amount' amount={tipAmountPerPerson} />
        <Amount title='Total' amount={totalPerPerson} />
      </div>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
