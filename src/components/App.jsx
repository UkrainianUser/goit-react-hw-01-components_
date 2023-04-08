import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

const App = () => {
  return (
    <div>
      <Profile />
      <Statistics />
      <FriendList />
      <TransactionHistory />
    </div>
  );
};

export default App;