import { useRef } from 'react';
import { useKey } from '../hook/useKey';

export default function Search({ query, setQuery }) {
  // useEffect(()=>{
  //   const el = document.querySelector(".search");
  //   el.focus();
  // },[query])

  const inputRef = useRef(null);
  useKey('Enter', () => {
    if (document.activeElement === inputRef.current) return;
    inputRef.current.focus();
    setQuery('');
  });

  return (
    <input
      className='search'
      type='text'
      placeholder='Search movies...'
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputRef}
    />
  );
}
