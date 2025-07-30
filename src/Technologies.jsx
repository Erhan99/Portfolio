export default function Technologies() {
  return (
    <section className="container">
        <h2 className="title fw-bold">Current Technologies</h2>
         <p className="text-white">I am proficient in a wide range of Technologies. These are some of the latest Technologies I have worked with. </p>
        
      <div className="d-flex flex-wrap justify-content-start">

         <div className="tech-badge d-flex flex-wrap">
           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" className="tech-icon cs-icon me-3" />
           <div>
              <h3 className="tech-name text-white">C#</h3>
              <p className="tech-subtitle">Wpf & Asp.net MVC</p>
            </div>
           </div>
           
           <div className="tech-badge d-flex flex-wrap">
           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className="tech-icon react-icon me-3" />
           <div>
              <h3 className="tech-name text-white">React</h3>
              <p className="tech-subtitle">Javascript Framework</p>
            </div>
           </div>

           <div className="tech-badge d-flex flex-wrap">
           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" className="tech-icon mssql-icon me-3" />
           <div>
              <h3 className="tech-name text-white">Microsoft SQL Server</h3>
              <p className="tech-subtitle">Database Management System</p>
            </div>
           </div>

           <div className="tech-badge d-flex flex-wrap">
           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className="tech-icon python-icon me-3" />
           <div>
              <h3 className="tech-name text-white">Python</h3>
              <p className="tech-subtitle">Data science & Machine Learning</p>
            </div>
           </div>

           <div className="tech-badge d-flex flex-wrap">
           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" className="tech-icon github-icon me-3" />
           <div>
              <h3 className="tech-name text-white">GitHub</h3>
              <p className="tech-subtitle">Version Control & Collaboration</p>
            </div>
           </div>

           <div className="tech-badge d-flex flex-wrap">
           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" className="tech-icon kotlin-icon me-3" />
           <div>
              <h3 className="tech-name text-white">Kotlin</h3>
              <p className="tech-subtitle">Android Development</p>
            </div>
           </div>

           <div className="tech-badge d-flex flex-wrap">
           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" className="tech-icon bootstrap-icon me-3" />
           <div>
              <h3 className="tech-name text-white">Bootstrap</h3>
              <p className="tech-subtitle">CSS Framework</p>
            </div>
           </div>

           <div className="tech-badge m-1 d-flex flex-wrap">
           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" className="tech-icon vuejs-icon me-3" />
           <div>
              <h3 className="tech-name text-white">Vue.js</h3>
              <p className="tech-subtitle">JavaScript Framework</p>
            </div>
           </div>
      </div>
    </section>
  );
}