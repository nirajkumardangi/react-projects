import { useEffect, useRef } from 'react';

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const timerId = useRef();

  useEffect(() => {
    timerId.current = setTimeout(() => {
      onConfirm();
    }, 3000);

    return () => {
      clearTimeout(timerId.current);
    };
  }, [onConfirm]);

  return (
    <div id='delete-confirmation'>
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id='confirmation-actions'>
        <button onClick={onCancel} className='button-text'>
          No
        </button>
        <button onClick={onConfirm} className='button'>
          Yes
        </button>
      </div>
    </div>
  );
}
