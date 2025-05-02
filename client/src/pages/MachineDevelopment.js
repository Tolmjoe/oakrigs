import React from 'react'
import { useNavigate } from 'react-router-dom';
import ServicePage from "./Services";
import machin from "../image/machine.jpg"

function MachineDevelopment() {




    const navigate = useNavigate();


    return (
        <div className='machineDevelopment'>
            <div className="return ">
                <a title="Go back to the Homepage." className="ret" onClick={() => navigate("/")}  >🏚️</a>
            </div>
            <ServicePage
                type="developmentMach"
                image={machin}
            />
        </div>
    )
}

export default MachineDevelopment