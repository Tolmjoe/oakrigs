import React from 'react'
import { useNavigate } from 'react-router-dom'
import Register from "../pages/Register"
function Login() {


  const navigate = useNavigate();

  return (
    <>

      <div className="fb">
        <div className="return">
          <a title="Go back to the Homepage." className="ret" onClick={() => navigate("/")}  >🏚️</a>
        </div>
        <div className="formbody2">
          <form className="signinform" method="POST">
            <div className="si">
              <label htmlFor="em">Email</label>
              <input required type="email" name="" id="em" />
            </div>
            <div className="si">
              <label htmlFor="pwd">Password</label>
              <input required type="password" name="" id="pwd" />
            </div>
            <div className="housebut">
              <button className="signinbutton" type="submit"><b style={{color:"aliceblue"}}>Sign in</b></button>
            </div>
            <div className="inup">
              You don't have an account?
              <a className="linkinup" onClick={() => navigate("/register")}>Register here</a>
            </div>
          </form>
        </div>
      </div>




    </>
  )
}

export default Login