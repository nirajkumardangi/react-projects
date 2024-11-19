import Button from './Button';

const buttons = [
  '7',
  '8',
  '9',
  'DEL',
  '4',
  '5',
  '6',
  '+',
  '1',
  '2',
  '3',
  '-',
  '.',
  '0',
  '/',
  'x',
  'RESET',
  '=',
];

export default function InputArea({ onClick }) {
  return (
    <div className='input-area'>
      <div className='buttons'>
        {buttons.map((btn, index) => (
          <Button
            key={index}
            className={btn === 'RESET' || btn === '=' ? 'wide' : ''}
            onClick={() => onClick(btn)}
          >
            {btn}
          </Button>
        ))}
      </div>
    </div>
  );
}
