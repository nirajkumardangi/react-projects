import { useEffect } from 'react';
import ProgressBar from './ProgressBar';

const timer = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect(() => {
    const timerId = setTimeout(() => {
      onConfirm();
    }, timer);

    return () => {
      clearTimeout(timerId);
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
      <ProgressBar timer={timer} />
    </div>
  );
}
