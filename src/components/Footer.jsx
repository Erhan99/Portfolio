import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
   return (
      <footer className="mt-5 d-flex flex-column justify-content-center text-center">
         <div className='d-flex flex-row align-items-center justify-content-center mt-3'>
                       <a href="https://www.linkedin.com/in/erhan-manav-a0257a254/" className='contact-icon'>
                          <FontAwesomeIcon icon={faLinkedin} color='white'/>
                       </a>
                       <a href="https://github.com/Erhan99" className='contact-icon'>
                          <FontAwesomeIcon icon={faGithub} color='white'/>
                       </a>
                       <a href="mailto:erhan9manav@gmail.com" className='contact-icon'>
                          <FontAwesomeIcon icon={faEnvelope} color='white'/>
                      </a>
                      <a href="/CV_Erhan_Manav.pdf" download className='contact-icon'>
                          <FontAwesomeIcon icon={faFileLines} color='white'/>
                       </a>
                    </div>
         <p className="text-white mt-3">Made by Erhan Manav</p>
      </footer>
   );
}