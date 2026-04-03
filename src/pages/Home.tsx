import { FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <section id="home" className="home">
      <div className="home-container">

        {/* PROFILE IMAGE */}
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQEcvBO9M1cKhA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1705612689353?e=1776902400&v=beta&t=rchE7y6dZT_NyS49PjIjheuVwoOz_a8WtaIma0YfdP0"
          alt="Arun Sharma"
          className="profile-img"
        />

        <h1>Arun Sharma</h1>
        <h3>Senior React Native Developer</h3>

        <div className="card">
          <p><FaPhone /> +91-7888550341</p>
          <p><FaEnvelope /> arunsharma13820@gmail.com</p>

          <a
            className="btn"
            href="https://www.linkedin.com/in/arunsharmakaushik/"
            target="_blank"
          >
            <FaLinkedin /> LinkedIn Profile
          </a>
        </div>

      </div>
     <section id="experience">
  <h1>💼 Experience</h1>

  <div className="card">
    <h2>Senior React Native Developer</h2>
    <p>
      <span className="company">Net Solutions</span> • Jan 2023 – Present • Chandigarh, India
    </p>

    <ul>
      <li>Leading React Native projects with focus on scalability and performance</li>
      <li>Mentoring junior developers and conducting code reviews</li>
      <li>Building reusable components and optimizing app performance</li>
      <li>Collaborating with design and backend teams</li>
    </ul>
  </div>

  <div className="card">
    <h2>React Native Developer</h2>
    <p>
      <span className="company">C.S. Soft Solutions</span> • Jan 2020 – Jan 2023 • Mohali, India
    </p>

    <ul>
      <li>Developed mobile apps using React Native</li>
      <li>Integrated REST APIs and built scalable features</li>
      <li>Worked with SonarQube, Git, Azure DevOps, Jira</li>
      <li>Built a mini food delivery application</li>
    </ul>
  </div>
</section>
    </section>
  );
}