import Friend from './Friend.jsx';

export default function FriendList({friends}) {
  return (
    <ul>
      {friends.map((item) => (
        <Friend friend={item} key={item.id} />
      ))}
    </ul>
  );
}
