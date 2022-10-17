import "./App.css";
import Gentleman from "../Gentleman/Gentleman";
import gentlemen from "../../gentlemen/gentlemen";

const App = () => {
  return (
    <>
      <Gentleman gentleman={gentlemen[0]} />
      <Gentleman gentleman={gentlemen[1]} />
      <Gentleman gentleman={gentlemen[2]} />
    </>
  );
};

export default App;
