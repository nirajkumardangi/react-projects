import { Filter, Circle, CheckCircle2 } from 'lucide-react';
import Button from './Button';

const filterOptions = [
  { id: 'all', label: 'All Tasks', icon: Filter },
  { id: 'pending', label: 'Pending', icon: Circle },
  { id: 'completed', label: 'Completed', icon: CheckCircle2 },
];

function FilterButtons({ activeFilter, setActiveFilter }) {
  return (
    <div className='flex gap-3 mb-6 justify-center flex-wrap'>
      {filterOptions.map((item) => (
        <Button
          id={item.id}
          key={item.id}
          label={item.label}
          icon={item.icon}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      ))}
    </div>
  );
}

export default FilterButtons;
