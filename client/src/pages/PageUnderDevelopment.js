import React from 'react'
import { useNavigate } from 'react-router-dom';

function PageUnderDevelopment() {




  const navigate = useNavigate();


  return (
    <div className='pageUnderDevelopment'>
      <div className="return ">
        <a title="Go back to the Homepage." className="ret" onClick={() => navigate("/")}  >🏚️</a>
      </div>
      <h2 style={{ backgroundColor: "black", padding: "40px" }}>Page Under Development</h2></div>
  )
}

export default PageUnderDevelopment