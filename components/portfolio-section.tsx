import { portfolioProjects } from "@/data/portfolio-data"
import "./common-styles.css"
import "./portfolio-section-mobile.css"
import "./portfolio-section-desktop.css"

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="section">
      <div className="section-container">
        <h2 className="section-title">制作事例</h2>

        <div className="portfolio-grid">
          {portfolioProjects.map((project) => (
            <div key={project.id} className="portfolio-card">
              <div className="portfolio-image">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
              </div>
              <div className="portfolio-content">
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-description">{project.description}</p>
                <div className="portfolio-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="portfolio-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
