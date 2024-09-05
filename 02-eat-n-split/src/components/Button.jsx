export default function BUtton({ children, onClick }) {
  return (
    <button className='button' onClick={onClick}>
      {children}
    </button>
  );
}
