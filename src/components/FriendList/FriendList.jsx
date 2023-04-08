import css from './FriendList.module.css';
import FriendListItem from 'components/FriendListItem/FriendListItem';
import friendsData from 'data/friends.json';

const FriendList = () => {
  return (
    <ul className={css.friendList}>
      {friendsData.map((friend) => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

export default FriendList;