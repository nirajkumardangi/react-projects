function Button({ children, variant = 'primary', icon: Icon }) {
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
    success: 'bg-green-600 hover:bg-green-700 text-white',
  };

  return (
    <button
      className={`px-4 py-2 rounded-lg font-semibold transition transform hover:scale-105 flex items-center gap-2 cursor-pointer ${variants[variant]}`}
    >
      {Icon && <Icon size={18} />}
      {children}
    </button>
  );
}

export default Button;
