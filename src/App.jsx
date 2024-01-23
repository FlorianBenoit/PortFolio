import "./App.css";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Competences from "./components/Competences/Competences";
import Nav from "./components/Nav/Nav";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <>
      {" "}
      <Nav />
      <Banner />
      <About />
      <Competences />
      <Portfolio />
    </>
  );
}

export default App;
