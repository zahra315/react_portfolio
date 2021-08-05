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
                <br />I am a front-end developer who enjoys turning complex
                problems into simple, beautiful and intuitive designs. When I'm
                not pushing pixels, you'll find me cooking, painting, or working
                out.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
