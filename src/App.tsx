import Counter from "./components/Counter";
import Profile from "./components/Profile";
import ShoppingList from "./components/ShoppingList";
import Todolist from "./components/Todolist";

function App() {
  return (
    <div>
      <Counter />
      ===============
      <Todolist />
      ===============
      <Profile />
      ===============
      <ShoppingList />
    </div>
  );
}

export default App;
