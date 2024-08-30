import './Header.css';
import {HashLink as Link} from "react-router-hash-link"
import {NavLink} from "react-router-dom"
import {useState} from "react";

export default function Header() {
	
	const [menuVisible, setMenuVisible] = useState(false);
	const toggleMenu = () => {
		setMenuVisible(!menuVisible);
	};
	return (
		<header id="header">
		<div id="logo">
			<Link smooth to="/"><img src="/logo.svg" alt="Irina Balanel, Full-Stack Developer"/></Link>
		</div>
		<nav>
			<button type="button" className={`menu-toggle ${menuVisible ? 'open' : ''}`} onClick={toggleMenu}>
			<span className="bar"></span>
			<span className="bar"></span>
			<span className="bar"></span>
			</button>
			<ul className={`nav-items ${menuVisible ? 'show' : ''}`}>
			<li><Link smooth to="/">Home</Link></li>
			<li><Link smooth to="/#about-section">About</Link></li>
			<li><Link smooth to="/#tech">Technologies</Link></li>
			<li><NavLink to="/projects">Projects</NavLink></li>
			</ul>
		</nav>
		<Link smooth to="/#contact" className="hidden"><div className="btn-filled">Contact me</div></Link>
		</header>
	);
}
