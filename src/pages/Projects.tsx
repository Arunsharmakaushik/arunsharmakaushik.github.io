import { FaMobileAlt, FaUsers, FaStore } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects">
      <h1>🚀 Projects</h1>

      {/* Project 1 */}
      <div className="project-card">
        <div className="project-header">
          <FaMobileAlt className="icon" />
          <h2>Compass Nil</h2>
        </div>

        <p className="highlight-text">
          Student–agency–school management system with 50,000+ downloads on App Store.
        </p>

        <ul>
          <li>Plaid API integration for bank connections</li>
          <li>USPS API for address validation</li>
          <li>User journey logging system</li>
          <li>React Query for API flow</li>
          <li>Redux for state management</li>
        </ul>
         {/* 🔥 CTA Button */}
  <a
    href="https://play.google.com/store/apps/details?id=com.clc.compass"
    target="_blank"
    rel="noopener noreferrer"
    className="btn"
  >
    View on Play Store
  </a> ̰
      </div>

      {/* Project 2 */}
      <div className="project-card">
        <div className="project-header">
          <FaUsers className="icon" />
          <h2>BSchool</h2>
        </div>

        <p className="highlight-text">
          Social networking platform for university students with real-time communication.
        </p>

        <ul>
          <li>GetStream Chat SDK integration</li>
          <li>Real-time messaging & group chats</li>
          <li>Post creation & profile features</li>
        </ul>
      </div>

      {/* Project 3 */}
      <div className="project-card">
        <div className="project-header">
          <FaStore className="icon" />
          <h2>Marketplace App</h2>
        </div>

        <p className="highlight-text">
          Vendor–customer marketplace application with role-based functionality.
        </p>

        <ul>
          <li>Google login integration</li>
          <li>Vendor & Customer roles</li>
          <li>Product management system</li>
          <li>Customer request flow</li>
        </ul>
      </div>
    </section>
  );
}