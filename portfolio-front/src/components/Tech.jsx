import {useState, useEffect} from "react";
import "./Tech.css"

export default function Tech(){
    const [skills, setSkills] = useState([]);

    useEffect(() => {
    const getSkills = async () => {
        let response = await fetch(`${process.env.REACT_APP_API_URL}`);
        let data = await response.json();
        setSkills(data);
        console.log(data);
    }
    getSkills();
    }, []);

    const frontendSkills = skills.filter(skill => skill.category === "Frontend");
    const backendSkills = skills.filter(skill => skill.category === "Backend");
    const otherSkills = skills.filter(skill => skill.category === "Other");
    

    return (
        <div id="tech">
            <h2>Technologies</h2>
            <p className="section-p">My tech stack includes a diverse set of languages and frameworks in both front-end and back-end technologies.</p>
            <div id="skills">
                <div id="front">
                    {frontendSkills.map(skill => (
                        <div key={skill._id} className="skill-card">
                            <img src={skill.icon_path} alt={skill.skill}></img>
                            <h3>{skill.skill}</h3>
                        </div>
                    ))}
                </div>
                <div id="back">
                    {backendSkills.map(skill => (
                        <div key={skill._id} className="skill-card">
                            <img src={skill.icon_path} alt={skill.skill}></img>
                            <h3>{skill.skill}</h3>
                        </div>
                    ))}
                </div>
                <div id="other">
                    {otherSkills.map(skill => (
                        <div key={skill._id} className="skill-card">
                            <img src={skill.icon_path} alt={skill.skill}></img>
                            <h3>{skill.skill}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}