import React from 'react'
import { useNavigate } from 'react-router-dom'
function About() {

const navigate= useNavigate();

  return (
    <div>
     
    
    <div className="about-body">
    <div className="return ab">
      <a title="Go back to the Homepage." className="ret" onClick={ ()=>navigate("/")}>🏚️</a>
    </div>
    <div className="about-container">
      <h1>ABOUT US</h1>
      <p>
        We are a passionate team of innovators and problem-solvers dedicated to
        delivering the best scalable solutions. Our mission is to bring value
        and quality to every project we work on, ensuring client satisfaction
        and driving positive impact.
      </p>
      <p>
        Our expertise ranges from web development, design and training to
        educational content and innovation.
      </p>
      <p>
        Join us on this exciting journey as we continue to create meaningful
        solutions that makes a difference in the world!
      </p>

      <address style={{color:"black"}}>
        <br />
      
        Get in touch:
        <a href="mailto:oktabytesInc@gmail.com" style={{color:"crimson"}}
          >Click to Email us!</a
        >
        <br />

        <br />

      
      </address>
    </div>
  </div>
    
    
    
    </div>
  )
}

export default About