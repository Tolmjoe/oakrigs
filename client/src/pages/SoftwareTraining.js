import React from 'react'
import { useNavigate } from 'react-router-dom';
import ServicePage from "./Services";
import softrain from "../image/softrain.jpg"

function SoftwareTraining() {




    const navigate = useNavigate();


    return (
        <div className='softwareTraining'>
            <div className="return ">
                <a title="Go back to the Homepage." className="ret" onClick={() => navigate("/")}  >🏚️</a>
            </div>
            <ServicePage
                type="training"
                image={softrain}
            />
        </div>
    )
}

export default SoftwareTraining