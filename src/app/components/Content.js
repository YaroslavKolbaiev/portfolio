import AboutMe from "./AboutMe";
import Projects from "./Projects";

const Content = () => {
  return (
    <div className="hero-body">
      <div className="container">
        <AboutMe />
        <hr className="has-background-grey-light" />
        <Projects />
      </div>
    </div>
  );
};

export default Content;
