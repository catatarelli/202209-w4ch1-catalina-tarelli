import "./App.css";
import Gentleman from "../Gentleman/Gentleman";
import gentlemen from "../../gentlemen/gentlemen";
import Info from "../Info/Info";
import { useState } from "react";
import Button from "../Button/Button";

const App = () => {
  const selectAll = () => {
    gentlemen.forEach((gentleman) => {
      gentleman.selected = true;
    });
    setCount(gentlemen.length);
  };

  const [count, setCount] = useState(0);

  return (
    <>
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <section className="controls">
        <Info number={count} />
        <Button
          text="Select all"
          className="button--select"
          action={selectAll}
        />
      </section>
      <main className="main">
        <ul>
          <Gentleman gentleman={gentlemen[0]} />
          <Gentleman gentleman={gentlemen[1]} />
          <Gentleman gentleman={gentlemen[2]} />
        </ul>
      </main>
    </>
  );
};

export default App;
