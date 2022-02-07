import "./App.css";
import { users } from "./data";
import UserProfile from "./profile/comPro";

function App() {
  return (
    <>
      <UserProfile users={users} />
    </>
  );
}

export default App;
