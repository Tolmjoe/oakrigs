import React from 'react'
import { useNavigate } from 'react-router-dom';
import ServicePage from "./Services";
import projects from "../image/projects.jpg"


function Projects() {




    const navigate = useNavigate();


    return (
        <div className='projects'>
            <div className="return ">
                <a title="Go back to the Homepage." className="ret" onClick={() => navigate("/")}  >🏚️</a>
            </div>
            <ServicePage
                type="projects"
                image={projects}
            />
        </div>
    )
}

export default Projects