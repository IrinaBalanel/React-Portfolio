import "./Footer.css"
// import {Link} from "react-router-dom"
import {HashLink as Link} from "react-router-hash-link"

export default function Footer() {
    return (
        <footer id="footer">
            {/* <hr></hr> */}
            <div>
                <Link smooth to="/#header">
                    <img src="/logo-centered.svg"/>
                </Link>
            </div>
            <p>&copy; Copyright, 2024</p>
        </footer>
    )
}