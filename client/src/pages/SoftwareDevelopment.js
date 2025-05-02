import React from 'react'
import { useNavigate } from 'react-router-dom';
import ServicePage from "./Services";
import softdev from "../image/softdev.jpg"

function SoftwareDevelopment() {




    const navigate = useNavigate();


    return (
        <div className='softwareDevelopment'>
            <div className="return ">
                <a title="Go back to the Homepage." className="ret" onClick={() => navigate("/")}  >🏚️</a>
            </div>
            <ServicePage
                type="developmentSoft"
                image={softdev}
            />
        </div>
    )
}

export default SoftwareDevelopment