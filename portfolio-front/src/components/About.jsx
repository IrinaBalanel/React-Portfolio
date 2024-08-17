import "./About.css"
import {Link} from "react-router-dom"

export default function About(){
    return (
        <div id="about-section">
            <h2>About me</h2>
            <p className="section-p">Every step of my career is shaped by a strong foundation of values that guide my decisions and drive my success.</p>
            <div id="columns">
                <div className="flex-col">
                    <img src="/Calendar.svg" className="icon-big"></img>
                    <h3>Focus & Consistency</h3>
                    <p>From managing software products to mastering web development, my career is driven by a love for learning and innovation. My focus? Building high-quality user-centric applications that make a difference.</p>
                    <div className="flex-icon">
                        <img src="/pin.svg" alt="location"/> 
                        <Link to="https://www.google.com/maps/place/Toronto,+ON/@43.7182412,-79.3780581,11z/data=!3m1!4b1!4m6!3m5!1s0x89d4cb90d7c63ba5:0x323555502ab4c477!8m2!3d43.653226!4d-79.3831843!16zL20vMGg3aDY?entry=ttu" target="_blank">Based in Toronto, Canada</Link>
                    </div>
                </div>
                <div className="flex-col">
                    <img src="/Diamond.svg" className="icon-big"></img>
                    <h3>Perseverance & Challenge</h3>
                    <p>With expertise ranging from React to Node.js, my skills span the full stack of software development. My journey is rooted in perseverance, always challenging myself to learn and excel. Discover more in my resume.</p>
                    <div className="flex-icon">
                        <img src="/download.svg" alt="download"/>
                        <Link to="https://drive.google.com/file/d/1yjXkbQBSgN_nrDTGsJbt5Jy-rTtyAcVH/view?usp=sharing" target="_blank">My resume</Link>
                    </div>
                </div>
                <div className="flex-col">
                    <img src="/ColorPalette.svg" className="icon-big"></img>
                    <h3>Creativity & Quality</h3>
                    <p>Creativity drives everything I do, from intuitive UIs to innovative solutions. I'm committed to bringing ideas to life in functional and visually appealing ways, always striving to exceed expectations. Let's collaborate!</p>
                    <div className="flex-icon">
                        <img src="/send.svg" alt="send email"/>
                        <Link to="mailto:irina.cowork@gmail.com">irina.cowork@gmail.com</Link>
                    </div>
                </div>
            </div>
        </div>

    )

}