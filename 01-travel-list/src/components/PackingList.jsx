import { useState } from 'react';
import Item from './Item';

// const initialItems = [
//   { id: 1, description: 'Passports', quantity: 2, packed: false },
//   { id: 2, description: 'Socks', quantity: 12, packed: false },
//   { id: 3, description: 'Cable', quantity: 5, packed: true },
// ];

export default function PackingList({ items, onDeleteItems, onToggleItems }) {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems;

  if (sortBy === 'input') sortedItems = items;

  if (sortBy === 'description')
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === 'packed')
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  function handleClearList() {
    onDeleteItems();
  } 

  return (
    <div className='list'>
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>

      <div className='actions'>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value='input'>SORT BY INPUT ORDER</option>
          <option value='description'>SORT BY INPUT DESCRIPTION</option>
          <option value='packed'>SORT BY INPUT PACKED STATUS</option>
        </select>
        <button onClick={handleClearList}>CLEAR LIST</button>
      </div>
    </div>
  );
}
