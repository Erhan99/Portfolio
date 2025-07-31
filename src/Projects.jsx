import MySocial from './assets/MySocial_Mockup.png';
import BudgetTracker from './assets/BudgetTracker_Mockup.png';
import AICode from './assets/AICode_Mockup.png';

export default function Projects() { 
   return (
      <section className="container mt-5">
         <h2 className="title fw-bold">Latest Projects</h2>
         <p className='text-white'>Here are some of the projects I've worked on:</p>
         <div className='d-flex flex-wrap justify-content-start mt-4 gap-4'>
            <div className='project'>
               <img src={MySocial} alt="MySocial Mockup" className="img-fluid mb-3 project-image" /> 
               <div className='d-flex flex-row justify-content-between'>
                  <div className='me-5'>
                  <h3 className="text-white">MySocial</h3>
                  <div className='d-flex flex-wrap justify-content-start'>
                     <p className="project-tag">C#</p>
                     <p className="project-tag">ASP.NET</p>
                     <p className="project-tag">SQL Server</p>
                     <p className="project-tag">Entity Framework</p>
                        <p className="project-tag">Javascript</p>
                        <p className="project-tag">Bootstrap</p>
                  </div>
                  </div>
                  <a className='project-redirect' href='#'>↗</a>
               </div>
            </div>

            <div className='project'>
               <img src={BudgetTracker} alt="Budget Tracker Mockup" className="img-fluid mb-3 project-image" /> 
               <div className='d-flex flex-row justify-content-between'>
                  <div className='me-5'>
                  <h3 className="text-white">Budget Tracker</h3>
                  <div className='d-flex flex-wrap justify-content-start'>
                        <p className="project-tag">Kotlin</p>
                        <p className="project-tag">Java</p>
                        <p className="project-tag">Jetpack Compose</p>
                        <p className="project-tag">PHP</p>
                        <p className="project-tag">MySQL</p>
                  </div>
                  </div>
                  <a className='project-redirect' href='#'>↗</a>
               </div>
            </div>

            <div className='project'>
               <img src={AICode} alt="AI Code Explainer Mockup" className="img-fluid mb-3 project-image" /> 
               <div className='d-flex flex-row justify-content-between'>
                  <div className='me-5'>
                  <h3 className="text-white">Local AI Code Explainer</h3>
                  <div className='d-flex flex-wrap justify-content-start'>
                        <p className="project-tag">React</p>
                        <p className="project-tag">Flask</p>
                        <p className="project-tag">Langchain</p>
                        <p className="project-tag">Bootstrap</p>
                  </div>
                  </div>
                  <a className='project-redirect' href='#'>↗</a>
               </div>
            </div>
         </div>
      </section>
   );
}