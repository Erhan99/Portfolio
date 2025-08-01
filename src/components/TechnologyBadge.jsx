export default function TechnologyBadge({ icon, name, subtitle, style }) {
   return (
      <div className="tech-badge d-flex flex-wrap">
           <img src={icon} className={`tech-icon ${style} me-3`} />
           <div>
              <h3 className="tech-name text-white">{name}</h3>
              <p className="tech-subtitle">{subtitle}</p>
            </div>
           </div>
  )
}