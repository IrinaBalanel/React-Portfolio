import './HomeScreen.css';
import {Link} from "react-router-dom"

export default function HomeScreen() {
    return (
        <div id="home">
            <img src="/IB.svg" alt="Irina Balanel" width="330px"/>
            <h1>Irina Balanel</h1>
            <p>Full-Stack Developer who stands at the crossroads of creativity and technology, bridging ideas with innovation in the ever-evolving digital landscape</p>
            <div id="buttons">
                <Link to="/projects" className="btn-outlined">Explore projects</Link>
                <Link to="https://drive.google.com/file/d/1yjXkbQBSgN_nrDTGsJbt5Jy-rTtyAcVH/view?usp=sharing" className="btn-outlined" target="_blank">View resume</Link>
            </div>
            <div className="socials hidden" id="self-aligned">
                <Link to="https://github.com/IrinaBalanel" target="_blank">
                    <img className="icon" src="/github.svg" alt="github"/>
                </Link>
                <Link to="https://www.linkedin.com/in/irina-balanel/" target="_blank">
                    <img className="icon" src="/linkedIn.svg" alt="linkedin"/>
                </Link>
                <Link to="https://www.instagram.com/irenmakarova8/" target="_blank">
                    <img className="icon" src="/instagram.svg" alt="instagram"/>
                </Link>
            </div>
        </div>
    );
}