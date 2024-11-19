import Header from './components/Header';
import InputArea from './components/InputArea';
import OutputArea from './components/OutputArea';
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('0');

  function handleInput(value) {
    if (value === 'RESET') {
      setInputValue('0');
    } else if (value === 'DEL') {
      setInputValue(inputValue.slice(0, -1) || '0');
    } else if (value === '=') {
      try {
        setInputValue(eval(inputValue.replace('x', '*')).toString());
      } catch {
        setInputValue("Error");
      }
    } else {
      setInputValue((prev) => (prev === '0' ? value : prev + value));
    }
  }

  return (
    <>
      <Header />
      <OutputArea value={inputValue} />
      <InputArea onClick={handleInput} />
    </>
  );
}

export default App;
