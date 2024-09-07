import { useState } from 'react';
import BillBox from './components/BillBox';
import ResultBox from './components/ResultBox';

export default function App() {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState('');
  const [people, setPeople] = useState('');

  const tipValue = tip / 100;
  const tipAmountPerPerson = people > 0 ? (bill * tipValue) / people : 0;
  const totalPerPerson = people > 0 ? (bill * (1 + tipValue)) / people : 0;

  function handleReset() {
    setBill('');
    setTip('');
    setPeople('');
  }

  return (
    <div className='container'>
      <BillBox
        bill={bill}
        setBill={setBill}
        tip={tip}
        setTip={setTip}
        people={people}
        setPeople={setPeople}
      />
      <ResultBox
        tipAmountPerPerson={tipAmountPerPerson}
        totalPerPerson={totalPerPerson}
        onReset={handleReset}
      />
    </div>
  );
}
