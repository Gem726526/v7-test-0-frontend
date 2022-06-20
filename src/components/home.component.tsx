import { useSelector } from "react-redux";
const Home = () => {

  const user = useSelector((state: any) => state.User?.UserData?.user)

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>You are {user ? `Logged In as "${user.username}".` : 'Logged out.'}</h3>
      </header>
    </div>
  );
}

export default Home
