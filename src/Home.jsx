import ProfileImage from './assets/profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFileLines } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
     <section className='home-section'>
        <div className='d-flex flex-row align-items-center justify-content-center text-center'>
                   <img src={ProfileImage} alt="Profile" className='img-fluid rounded-circle me-3 border border-white' />
                   <div className='p-0 m-0'>
                       <h1 className='title'>Erhan Manav</h1>
                       <h2 className="subtitle">Based in Belgium</h2>
                   </div>
                   </div>
                   <h1 className='title2'><span className='marked'>Computer Science</span> student</h1>
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
                      <a href="/Erhan_Manav_CV.pdf" download className='contact-icon'>
                          <FontAwesomeIcon icon={faFileLines} color='white'/>
                       </a>
                    </div>
     </section>
  );
}