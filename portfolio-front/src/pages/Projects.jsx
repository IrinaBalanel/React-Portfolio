import {useState, useEffect} from "react";
import './Projects.css';

function ProjectLanguages({ languages }) {
    return (
      <div className="languages-container">
        {languages.map((language, index) => (
        <div key={index} className="language-item">
            {language}
        </div>
        ))}
      </div>
    );
}

export default function Projects(){
    const [projects, setProjects] = useState([]);

    useEffect(() => {
    const getProjects = async () => {
        let response = await fetch(`${process.env.REACT_APP_API_URL}/projects`);
        let data = await response.json();
        setProjects(data);
        console.log(data);
    }
    getProjects();
    }, []);
    

    return (
        <main>
            <div id="projects-section">
                <h1>My Portfolio</h1>
                <p className="section-p">Explore the projects that reflect my journey and expertise in development.</p>
                <div id="projects">
                {
                    projects.map((project) => (
                        <div key={project._id} id="project-card">
                            <div id="project-img-container"><img src={project.thumbnail} alt={project.project_name}></img></div>
                            <h2>{project.project_name}</h2>
                            <ProjectLanguages languages={project.languages} />
                            <p>{project.description}</p>
                            <div id="buttons">
                                {project.github_link && (
                                    <div className="flex-icon">
                                        <img src="/link.svg" alt="link"></img>
                                        <a href={project.github_link} target="_blank">View GitHub</a>
                                    </div>
                                )}
                                {project.demo_link && (
                                    <div className="flex-icon">
                                        <img src="/screen.svg" alt="screen"></img>
                                        <a href={project.demo_link} target="_blank">Live Demo</a>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </main>
        
    )
}