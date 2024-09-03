import Item from './Item';

// const initialItems = [
//   { id: 1, description: 'Passports', quantity: 2, packed: false },
//   { id: 2, description: 'Socks', quantity: 12, packed: false },
//   { id: 3, description: 'Cable', quantity: 5, packed: true },
// ];

export default function PackingList({ items, onDeleteItems, onToggleItems }) {
  return (
    <div className='list'>
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>
    </div>
  );
}
