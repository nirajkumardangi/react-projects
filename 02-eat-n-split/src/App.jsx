import FormAddFriend from './components/FormAddFriend';
import FriendList from './components/FriendList';
import Button from './components/Button';
import { useState } from 'react';
import FormSplitBill from './components/FormSplitBill';
import { initialFriends } from '../data';

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);

  function handleAddFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleAddFriends(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendList friends={friends} />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriends} />}
        <Button onClick={handleAddFriend}>
          {showAddFriend ? 'Close' : 'Add friend'}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
