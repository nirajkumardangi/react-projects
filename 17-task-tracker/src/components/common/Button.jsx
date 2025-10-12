function Button({ id, label, icon: Icon, activeFilter, setActiveFilter }) {
  const isActive = activeFilter === id;
  return (
    <button
    onClick={() => setActiveFilter(id)}
      className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 flex items-center gap-2 cursor-pointer ${
        isActive
          ? 'bg-white text-purple-600 shadow-lg'
          : 'bg-white/20 text-white border-2 border-white/30 hover:bg-white/30'
      }`}
    >
      <Icon className='w-5 h-5' />
      {label}
    </button>
  );
}

export default Button;
