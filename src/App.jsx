import "bootstrap/dist/css/bootstrap.css";
import "../defaults.css";
import "../styles.css";
import Hero from "./components/Home/Hero";
import BusinessCard from "./components/Home/BusinessCard";
import AboutMe from "./components/Home/AboutMe";
import MyProjects from "./components/Home/MyProjects";
import FindMe from "./components/Home/FindMe";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Hero />
          <BusinessCard />
          <AboutMe />
          <MyProjects />
          <FindMe />
        </div>
      </div>
    </>
  );
}

export default App;
