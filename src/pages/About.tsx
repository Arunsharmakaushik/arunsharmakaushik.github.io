import { FaUser, FaBriefcase, FaCode, FaProjectDiagram } from "react-icons/fa";

export default function About() {
  return (
    <section id="about">
      <h1><FaUser /> About Me</h1>

      <div className="card">
  <p>
    I’m a React Native developer with over <b>6 years of experience</b> in mobile app development, based in Punjab, India.
  </p>

  <p>
    I have worked with two companies, spending 3 years in my first company and currently working as a <b>Senior React Native Developer</b> in my second company, where I continue to build scalable and high-performance mobile applications.
  </p>
</div>
<section id="skills">
  <h1>💡 Skills</h1>

  <div className="skills-container">

    <span className="skill">React Native</span>
    <span className="skill">Redux</span>
    <span className="skill">Context API</span>
    <span className="skill">React Query</span>
    <span className="skill">API Integration</span>
    <span className="skill">SQLite</span>
    <span className="skill">Realm</span>
    <span className="skill">Git</span>
    <span className="skill">GitHub</span>
    <span className="skill">Sourcetree</span>
    <span className="skill">SonarQube</span>
    <span className="skill">Azure CI/CD</span>

  </div>
</section>
      <div className="card">
        <h2><FaCode /> Technical Experience</h2>
        <ul>
          <li>Strong experience in API Integration</li>
          <li>Worked with SQLite & Realm databases</li>
          <li>State management using Redux & Context API</li>
          <li>Hands-on experience with Git, GitHub & Sourcetree</li>
          <li>Delivered apps on Play Store & App Store</li>
        </ul>
      </div>

      <div className="card">
        <h2><FaBriefcase /> Professional Experience</h2>
        <p>
          Worked on enterprise-level applications with a team of 20+ developers.
        </p>
        <ul>
          <li>Handled multiple user roles</li>
          <li>Implemented logging systems for debugging</li>
          <li>Used SonarQube for code quality</li>
          <li>Worked with Azure CI/CD pipelines</li>
        </ul>
      </div>

      <div className="card">
        <h2><FaProjectDiagram /> Major Projects</h2>

    <div className="project-card">

  <h2 className="project-title">Compass Nil</h2>

  <p className="project-tag">50,000+ downloads</p>

  <ul>
    <li>Plaid integration (bank linking)</li>
    <li>USPS API integration</li>
    <li>React Query + Redux</li>
  </ul>

</div>

      <div className="project-card">

  <h2 className="project-title">BSchool</h2>

  <p className="project-tag">Social Platform</p>

  <ul>
    <li>GetStream Chat SDK</li>
    <li>Real-time messaging</li>
    <li>Social media features</li>
  </ul>

</div>

     <div className="project-card">

  <h2 className="project-title">Marketplace App</h2>

  <p className="project-tag">
    Vendor–Customer Role-based System
  </p>

  <ul>
    <li>Google login integration</li>
    <li>Vendor & Customer roles</li>
  </ul>

</div>
      </div>
    </section>
  );
}