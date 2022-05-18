import { Fragment } from "react";
import css from "./App.module.css";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Layout/Header/Header";

import HomePage from "./pages/HomePage";

function App() {
  return (
    <Fragment>
      <div className={css.container}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </Fragment>
  );
}

export default App;
