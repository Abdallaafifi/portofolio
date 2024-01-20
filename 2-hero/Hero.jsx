import "./hero.css";

const Hero = () => {

  return (
    <section className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
           <img height={64} src={require("./me-modified.png")} alt={"pnh"} />
          <div className="icon-verified"></div>
        </div>

        <h1

          className="title"
        >
          Software designer, founder, and amateur astronaut.
        </h1>

        <p className="sub-title">
          Im Ali Hassan, a software designer and entrepreneur based in New York
          City. m the founder and CEO of Planetaria, where we develop
          technologies that empower regular people to explore space on their own
          terms.
        </p>

        <div className="all-icons flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>

      <div className="right-section animation ">
      
      </div>
    </section>
  );
};

export default Hero;
