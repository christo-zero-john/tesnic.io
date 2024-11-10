import "bootstrap/dist/css/bootstrap.css";
import "../defaults.css";
import "../styles.css";
import BusinessCard from "./components/Home/business-card";
import AboutMe from "./components/Home/about-me";
import Hero from "./components/Home/hero"
import FindMe from "./components/Home/find-me";
import MyProjects from "./components/my-projects/my-pojects";

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
