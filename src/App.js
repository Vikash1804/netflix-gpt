import { Provider } from "react-redux";
import Body from "./components/Body";
import Appstore from "./utils/Appstore";

function App() {
  return (
    <div className="text-red-700 font-bold">
      <Provider store={Appstore}>
      <Body />
      </Provider>
    </div>
  );
}

export default App;
