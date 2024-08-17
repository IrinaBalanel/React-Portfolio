import './ProjectsCTA.css';
import {Link} from "react-router-dom"

export default function ProjectsCTA() {
    return (
        <div id="projects-cta">
            <div id="gradient">
                <h2>Discover the creations that bring my skills to life</h2>
                <p className="section-p">Journey through the projects that reflect my growth and expertise, each one is a step forward in mastering the art of web development.</p>
                <Link to="/projects" className="btn-filled">Explore projects</Link>
            </div>
        </div>
    )
}