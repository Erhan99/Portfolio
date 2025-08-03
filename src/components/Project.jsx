import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
export default function Project({ img, title, tags, text, url }) { 
   return (
      <div className='project'>
                     <div className='image-wrapper mb-3'>
                        <img src={img} alt={title} className="project-image" /> 
                     </div>
                     <div className='d-flex flex-column justify-content-between'>
                        <div className='d-flex flex-row justify-content-between mb-3'>
               <h3 className="text-white">{title}</h3>
               {url && <a className='explore' href={url}>Explore <FontAwesomeIcon icon={faArrowRight} className='ms-2'/></a>}
            </div>
                        <p className='project-text'>{text}</p>
                        <div className='d-flex flex-wrap justify-content-start'>
                           {tags.map(tag => (
                              <p className="project-tag" key={tag}>{tag}</p>
                           ))}
                        </div>    
                     </div>
                  </div>
   )
}