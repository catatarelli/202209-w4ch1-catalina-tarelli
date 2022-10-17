import "./App.css";
import Gentleman from "./components/Gentleman/Gentleman";
import gentlemen from "./gentlemen/gentlemen";

const App = () => {
  return <Gentleman gentleman={gentlemen[0]} />;
};

export default App;
