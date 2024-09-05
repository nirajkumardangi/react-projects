import Friend from './Friend.jsx';

export default function FriendList({ friends, onSelectFriend, selectedFriend }) {
  return (
    <ul>
      {friends.map((item) => (
        <Friend friend={item} key={item.id} onSelectFriend={onSelectFriend} selectedFriend={selectedFriend} />
      ))}
    </ul>
  );
}
