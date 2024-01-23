import About from "../About/About";
import Banner from "../Banner/Banner";
import Competences from "../Competences/Competences";
import Nav from "../Nav/Nav";
import Portfolio from "../Portfolio/Portfolio";

function Home() {
  return (
    <>
      {" "}
      <Nav />
      <Banner />
      <About />
      <Competences />
      <Portfolio />;
    </>
  );
}

export default Home;
