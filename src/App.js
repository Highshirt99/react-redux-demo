import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/iceCreamContainer";
import BreadContainer from './components/BreadContainer';
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/itemContainer";
import UserContainer from "./components/userContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake />
        <ItemContainer iceCream />
        <CakeContainer />
        <HooksCakeContainer/>
        <IceCreamContainer/>
        <BreadContainer/>
        <NewCakeContainer/>
        <UserContainer/>
      </div>
    </Provider>
  );
}

export default App;
