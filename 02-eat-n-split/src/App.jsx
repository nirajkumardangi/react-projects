import FormAddFriend from './components/FormAddFriend';
import FriendList from './components/FriendList';
import Button from './components/Button';

function App() {
  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendList />
        <FormAddFriend />
        <Button>Add friends</Button>
      </div>
    </div>
  );
}

export default App;
