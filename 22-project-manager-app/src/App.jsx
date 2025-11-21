import Sidebar from './components/Sidebar';

function App() {
  const projects = [
    { id: 1, title: 'Website Redesign', tasks: 5 },
    { id: 2, title: 'Mobile App', tasks: 8 },
    { id: 3, title: 'Marketing Campaign', tasks: 3 },
  ];

  return (
    <div className='h-screen flex bg-gray-100'>
      <Sidebar projects={projects} />
    </div>
  );
}

export default App;
