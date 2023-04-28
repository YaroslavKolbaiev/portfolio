import Image from "next/image";
import data from "../data/data.json";

const Projects = () => {
  return (
    <div className="columns is-centered is-multiline">
      {data.map((project) => (
        <div key={project.id} className="column is-full is-half-widescreen">
          <div
            style={{ height: "260px" }}
            className="box has-background-light p-0 is-flex"
          >
            <Image
              style={{
                objectFit: "cover",
                height: "100%",
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
              }}
              src={project.image}
              alt="Picture of project"
              width={240}
              height={240}
            />
            <div className="is-flex-grow-1 p-3">
              <h1 className="is-size-4-tablet is-size-5 has-text-weight-semibold has-text-centered">
                {project.title}
              </h1>
              <p className="is-size-5-tablet is-size-6 has-text-centered mb-4">
                {project.description}
              </p>
              <div
                style={{ gap: "20px" }}
                className="is-flex is-justify-content-center mb-4"
              >
                <span className="icon">
                  <a href={project.demo}>
                    <img src="/assets/web-svgrepo-com.svg" />
                  </a>
                </span>
                <span className="icon">
                  <a href={project.gitHub}>
                    <img src="/assets/github-142-svgrepo-com.svg" />
                  </a>
                </span>
              </div>
              <p className="is-size-6 is-italic has-text-centered">
                Stack: {project.stack}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
