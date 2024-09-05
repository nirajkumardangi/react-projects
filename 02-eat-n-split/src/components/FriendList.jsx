import { initialFriends } from '../../data.js';
import Friend from './Friend.jsx';

export default function FriendList() {
  return (
    <ul>
      {initialFriends.map((item) => (
        <Friend friend={item} key={item.id} />
      ))}
    </ul>
  );
}
