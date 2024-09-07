export default function BillBox({
  bill,
  setBill,
  tip,
  setTip,
  people,
  setPeople,
}) {
  console.log(bill);
  return (
    <div className='bill-box'>
      <div className='bill'>
        <div className='input-span'>
          <span>Bill</span>
          {bill === 0 && <span className='error'>Can't be zero</span>}
        </div>
        <input
          className={`input ${bill === 0 ? 'border-red' : ''}`}
          min='0'
          type='number'
          value={bill}
          onChange={(e) => setBill(+e.target.value)}
        />
      </div>

      <div className='tip'>
        <p>Select Tip %</p>
        <div className='tip-buttons'>
          <button onClick={() => setTip(5)}>5%</button>
          <button onClick={() => setTip(10)}>10%</button>
          <button onClick={() => setTip(15)}>15%</button>
          <button onClick={() => setTip(20)}>20%</button>
          <button onClick={() => setTip(25)}>25%</button>
          <input
            type='number'
            placeholder='Custom'
            value={tip}
            onChange={(e) => setTip(+e.target.value)}
          />
        </div>
      </div>

      <div className='number-of-people'>
        <div className='input-span'>
          <span>Number of People</span>
          {people === 0 && <span className='error'>Can't be zero</span>}
        </div>
        <input
          className={`input ${people === 0 ? 'border-red' : ''}`}
          min='1'
          type='number'
          value={people}
          onChange={(e) => setPeople(+e.target.value)}
        />
      </div>
    </div>
  );
}
