import { Route, Routes } from "react-router-dom";
import "./App.css";
import Error404 from "./components/404/404";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      {" "}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
