import { useEffect, useRef } from 'react';

export default function Search({ query, setQuery }) {
  // useEffect(()=>{
  //   const el = document.querySelector(".search");
  //   el.focus();
  // },[query])

  const inputRef = useRef(null);

  useEffect(() => {
    function callback(e) {
      if (document.activeElement === inputRef.current) return;

      if (e.code === 'Enter') {
        inputRef.current.focus();
        setQuery('');
      }
    }

    document.addEventListener('keydown', callback);
    return () => document.removeEventListener('keydown', callback);
  }, [setQuery]);

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
