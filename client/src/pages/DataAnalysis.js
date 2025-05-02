import React from 'react'
import { useNavigate } from 'react-router-dom';
import ServicePage from "./Services";
import analysis from "../image/datana.jpg"

function DataAnalysis() {




    const navigate = useNavigate();


    return (
        <div className='dataAnalysis'>
            <div className="return ">
                <a title="Go back to the Homepage." className="ret" onClick={() => navigate("/")}  >🏚️</a>
            </div>
            <ServicePage
                type="analysis"
                image={analysis}
            />
        </div>
    )
}

export default DataAnalysis