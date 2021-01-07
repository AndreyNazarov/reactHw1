import profile from "./json/user.json";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import statisticalData from "./json/statisticalData.json";
import friends from "./json/friends.json";
import FriendList from "./components/Friends/Friends";
import transactions from "./json/transactions.json";
import TransactionHistory from "./components/Transactions/Transactions";

export default function App() {
  return (
    <div>
      <Profile
        name={profile.name}
        tag={profile.tag}
        location={profile.location}
        avatar={profile.location}
        avatar={profile.avatar}
        stats={profile.stats}
      />
      <h2>Task2</h2>
      <Statistics title="Upload stats" stats={statisticalData} />;<h2>Task3</h2>
      <FriendList friends={friends} />,
      <TransactionHistory items={transactions} />;
    </div>
  );
}
