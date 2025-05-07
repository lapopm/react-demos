import Greeting from "./components/Greeting";
import UserStatus from "./components/UserStatus";
import Weather from "./components/Weather";

function App() {
  return (
    <div>
      <Weather />
      <h1>===================</h1>
      <UserStatus loggedIn={true} isAdmin={false} />
      <h1>===================</h1>
      <Greeting timeOfDay="morning" />
    </div>
  );
}

export default App;
