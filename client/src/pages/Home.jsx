import { Analytics } from "../components/Analytics";
import { useAuth } from "../store/auth";

export const Home = () => {
  const { user } = useAuth();

 return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
            <p className="typing-text">I am a full-stack web developer.</p>
              <h1>Hey! I am  <span style={{color:"#646cff"}} >
              Biplap 
              </span> Neupane🙏.</h1>
              <p>
              I&apos;m a full stack web developer. I have experience in HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and more.</p>

              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">connect now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">learn more</button>
                </a>
              </div>
            </div>

            {/* hero images  */}
            <div className="hero-image">
              <img
                src="/images/profile.png"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section  */}
      <Analytics />

      {/* 3rd section  */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
            <img
              src="/images/design.png"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
          <p>How can I assist you today?</p>
          <h1>Let's Build Something Great Together</h1>
          <p>Hello  {user.username ? <span className="username">{user.username}!! </span> : "there!"}
          I'm here to turn your ideas into reality. As an experienced developer, I specialize in web development and IT services.</p>
          <p>Whether you need a stunning website, IT consulting, or other IT services, I've got the skills and expertise to bring your vision to life.</p>
          <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
