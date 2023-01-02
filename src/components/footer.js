import navIcon1 from '../assets/img/github.svg';
import navIcon2 from '../assets/img/linkedin.svg';
import navIcon3 from '../assets/img/email.png';

export const Footer=()=> {
    return (
        <footer>
            <a href="#" className='footer_logo'>CLARA WONG</a>
            <div className='permalinks'>
                <a class="nodeco" href="#banner">HOME</a>
                <a class="nodeco" href="#skills">SKILLS</a>
                <a class="nodeco" href="#experience">WORK EXPERIENCE</a>
                <a class="nodeco" href="#projects">PROJECTS</a>
                <a class="nodeco" href="#contact">CONTACT</a>
            </div>

            <div className="footer-socials">
                <a href="https://www.linkedin.com/in/clarawong20/"><img src={navIcon2} alt="linkedin logo"/></a>
                <a href="https://github.com/clarawong20"><img src={navIcon1} alt="github logo"/></a>
                <a href="mailto:clarawong20@gmail.com"><img src={navIcon3} alt="email logo"/></a>
            </div>

            <div className='footer-note'>
                <small>HANDMADE WITH REACT.JS</small>
                <p></p>
                <small>&copy; CLARA WONG 2023</small>
            </div>
        </footer>
    )
}

export default Footer