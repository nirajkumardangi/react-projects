import Input from './components/Input';
import NewProject from './components/NewProject';
import Sidebar from './components/Sidebar';
import WelcomeScreen from './components/WelcomeScreen';

function App() {
  const projects = [
    { id: 1, title: 'Website Redesign', tasks: 5 },
    { id: 2, title: 'Mobile App', tasks: 8 },
    { id: 3, title: 'Marketing Campaign', tasks: 3 },
  ];

  return (
    <div className='h-screen flex bg-gray-100'>
      <Sidebar projects={projects} />
      {/* <WelcomeScreen /> */}
      <NewProject/>
    </div>
  );
}

export default App;
