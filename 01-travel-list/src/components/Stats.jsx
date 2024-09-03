import React from 'react';

// lift state up
export default function Stats({ items }) {
  // derived state
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  if (!items.length) {
    return (
      <em className='stats'>Start adding some items to your packing list ✈</em>
    );
  }

  return (
    <footer className='stats'>
      <em>
        {percentage === 100
          ? 'You got everything! Ready to go ✈'
          : `💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
