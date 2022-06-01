import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

import { useSelector } from "react-redux";

function App() {
  const authenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <Header />
      {!authenticated ? <Auth /> : <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
