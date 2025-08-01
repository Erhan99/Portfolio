import TechnologyBadge from "./components/TechnologyBadge";

export default function Technologies() {
  return (
    <section className="container">
        <h2 className="title fw-bold">Current Technologies</h2>
         <p className="text-white">I am proficient in a wide range of Technologies. These are some of the latest Technologies I have worked with. </p>
        
      <div className="d-flex flex-wrap justify-content-start">

         <TechnologyBadge
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
            name="C#"
              subtitle="Wpf & Asp.net MVC"
              style="cs-icon"
         />

         <TechnologyBadge
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            name="React"
            subtitle="Javascript Framework"
            style="react-icon"
         />

         <TechnologyBadge
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg"
            name="Microsoft SQL Server"
            subtitle="Database Management System"
            style="mssql-icon"
         />

         <TechnologyBadge
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
            name="Python"
            subtitle="Data science & Machine Learning"
            style="python-icon"
         />

         <TechnologyBadge
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
            name="GitHub"
            subtitle="Version Control & Collaboration"
            style="github-icon"
         />

         <TechnologyBadge
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg"
            name="Kotlin"
            subtitle="Android Development"
            style="kotlin-icon"
         />

         <TechnologyBadge
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
            name="Bootstrap"
            subtitle="CSS Framework"
            style="bootstrap-icon"
         />

         <TechnologyBadge
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
            name="Vue.js"
            subtitle="JavaScript Framework"
            style="vuejs-icon"
         />
      </div>
    </section>
  );
}