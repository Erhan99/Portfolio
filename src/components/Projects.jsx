import MySocial from '../assets/MySocial_Mockup.png';
import BudgetTracker from '../assets/BudgetTracker_Mockup.png';
import AICode from '../assets/AICode_Mockup.png';
import Project from './Project.jsx';

export default function Projects() { 
   return (
      <section className="container mt-5">
         <h2 className="title fw-bold">Latest Projects</h2>
         <p className='text-white'>Here are some of the projects I've worked on:</p>
         <div className='d-flex flex-wrap justify-content-center mt-4 gap-4'>

            <Project
               img={MySocial}
               title="MySocial"
               tags={["C#", "ASP.NET", "SQL Server", "Entity Framework", "Javascript", "Bootstrap"]}
               text="A social media platform built with C# and ASP.NET."
               url="https://github.com/Erhan99/MySocial"
            />

            <Project
               img={BudgetTracker}
               title="Budget Tracker"
               tags={["Kotlin", "Java", "Jetpack Compose", "PHP", "MySQL"]}
               text="A budgeting application built with Kotlin and Jetpack Compose."
               url="https://github.com/Erhan99/AWM-BudgetTracker-v2"
            />

            <Project
               img={AICode}
               title="AI Code Explainer"
               tags={["React", "Flask", "Langchain", "Bootstrap"]}
               text="A local AI-powered code explanation tool built with React and Flask."
            />
         </div>
      </section>
   );
}
               