import selfy from "../assets/image/self.jpg";

const About = () => {
  return (
    <section className="flex bg-dark">
      <div className="container">
        <div className="text-white ">
          <div>
            <h3>About Me</h3>
            <img src={selfy} className="rounded" alt="about me" />
            <div>
              <p>
                I make things
                <br />
                that <span className="resume display-1">make a difference</span>
                .
                <br />A full-stack software engineer maintained, developed, and
                launched multiple projects from scratch, developing its back-end
                and front-end codebases. My current toolset includes JavaScript,
                JQuery, Reactjs, Redux, and various frameworks, libraries, and
                technologies related to them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
