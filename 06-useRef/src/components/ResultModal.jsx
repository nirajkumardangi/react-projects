import { useRef, forwardRef, useImperativeHandle } from 'react';

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {
  const dialog = useRef(null);

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    },
    close() {
      dialog.current.close();
    },
  }));

  return (
    <dialog ref={dialog} className='result-modal'>
      <h2>You {result}</h2>
      <p>
        The Target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
      <form method='dialog'>
        <button onClick={() => dialog.current.close()}>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
