import './HomeScreen.css';
import {Link} from "react-router-dom"

export default function HomeScreen() {
    return (
        <div id="home">
            <img src="/IB.png" alt="Irina Balanel" width="320px" height="auto"/>
            <h1>Irina Balanel</h1>
            <p style={{margin: "0"}}>Full-Stack Developer,</p>
            <p style={{margin: "0 0 30px 0"}}>bridging Development, Design & Product Strategy</p>
            <div id="buttons">
                <Link to="/projects" className="btn-filled">Explore projects</Link>
                <Link to="https://resume.irinabalanel.com" className="btn-filled" target="_blank">View resume</Link>
            </div>
            <div className="socials hidden" id="self-aligned">
                <Link to="https://github.com/IrinaBalanel" target="_blank">
                    <img className="icon" src="/github.svg" alt="github"/>
                </Link>
                <Link to="https://www.linkedin.com/in/irina-balanel/" target="_blank">
                    <img className="icon" src="/linkedIn.svg" alt="linkedin"/>
                </Link>
                {/* <Link to="https://www.instagram.com/irenmakarova8/" target="_blank">
                    <img className="icon" src="/instagram.svg" alt="instagram"/>
                </Link> */}
            </div>
        </div>
    );
}