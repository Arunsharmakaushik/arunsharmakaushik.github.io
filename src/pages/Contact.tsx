import { FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact">
      <h1>Contact</h1>

      <div className="card">
        <p><FaPhone /> +91-7888550341</p>
        <p><FaEnvelope /> arunsharma13820@gmail.com</p>

        <a
          className="btn"
          href="https://mydeveloparea.wordpress.com/"
          target="_blank"
        >
          <FaGlobe /> Visit Blog
        </a>
      </div>
    </section>
  );
}