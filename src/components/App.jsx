import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from 'data/user.json';
import data from 'data/data.json';
import friendsData from 'data/friends.json';
import transactions from 'data/transactions.json';

const App = () => {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes} />
      <Statistics 
        title="Upload stats"
        stats={data}
      />
      <FriendList friends={friendsData}/>
      <TransactionHistory items={transactions}/>
    </div>
  );
};

export default App;