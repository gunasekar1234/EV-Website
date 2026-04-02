import './About.css'

const About = () => {
  return (
    <div className="about" id="about">
      <h1>About EV-olution</h1>
      <p>
        <strong>EV-olution</strong> is a modern car exploration platform that showcases
        top vehicles. Users can explore cars, see details, pricing, and specs.
      </p>
      <p>
        Our goal is smooth UX, responsive design, and real-world app development skills.
      </p>

      <h3>Built With</h3>
      <ul className="tech-stack">
        <li>⚛️ React 18</li>
        <li>🛣️ React Router</li>
        <li>⚡ Vite</li>
        <li>🎨 CSS3 & Animations</li>
      </ul>
    </div>
  )
}

export default About;