import { useState } from "react";
const projects = [
  {
    title: "Full-Stack Commerce",
    type: "Commerce · Application development",
    description:
      "A shopping application combining a customer-facing React interface with authentication, product management and MongoDB persistence.",
    tags: ["React", "MongoDB", "Authentication"],
    live: "https://tpfinal-react-lenzberg.vercel.app/",
    code: "https://github.com/tristanlgb/TPFinal_React_Lenzberg",
    category: "Full stack",
  },
  {
    title: "TaskFlow",
    type: "Productivity · Browser application",
    description:
      "A task workspace with categories, status tracking, due dates, image attachments and search. Tasks persist in browser storage.",
    tags: ["React", "TypeScript", "Local storage"],
    live: "https://taskmanagerreact-pi.vercel.app/",
    code: "https://github.com/tristanlgb/taskmanager",
    category: "Frontend",
  },
  {
    title: "Social Observatory",
    type: "Data visualization · Social research",
    description:
      "A dashboard comparing socioeconomic samples from 2016 and 2024, with methodological limits and privacy considerations made explicit.",
    tags: ["Chart.js", "Data visualization", "Accessible UI"],
    live: "https://app-graficos-clase-social.vercel.app/",
    code: "https://github.com/tristanlgb/AppGraficosClaseSocial",
    category: "Data",
  },
  {
    title: "Product Lab",
    type: "Product exploration · Interactive prototypes",
    description:
      "Ten product concepts across research, media, collaboration, public life, knowledge and wellbeing, each with a focused interactive experience.",
    tags: ["React", "TypeScript", "Prototyping"],
    live: "https://more-projects-lab.vercel.app/",
    code: "https://github.com/tristanlgb/more-projects",
    category: "Frontend",
  },
  {
    title: "Academic Administration",
    type: "Operations · Administrative interface",
    description:
      "An Angular portal for managing students, courses and enrolments, with search tools organized around everyday administrative tasks.",
    tags: ["Angular", "Forms", "Responsive UI"],
    live: "https://trabajo-final-angular-indol.vercel.app/",
    code: "https://github.com/tristanlgb/TrabajoFinalAngular",
    category: "Frontend",
  },
  {
    title: "Interactive Pokédex",
    type: "API integration · Interactive experience",
    description:
      "An exploratory interface connecting Pokémon data from PokéAPI with interactive 3D elements and process visualizations.",
    tags: ["PokéAPI", "Interactive 3D", "API integration"],
    live: "https://pokedex-pokeapi-ruddy.vercel.app/",
    code: "",
    category: "Frontend",
  },
];
const filters = ["All", "Full stack", "Frontend", "Data"] as const;
type Filter = (typeof filters)[number];
function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = projects.filter(
    (project) => filter === "All" || project.category === filter,
  );
  const showFeatured = filter === "All" || filter === "Full stack";
  return (
    <section
      id="projects"
      className="projects-section"
      aria-labelledby="projects-title"
    >
      <div className="shell">
        <div className="projects-heading">
          <div className="section-label light">
            <span>01</span>
            <p>Selected work</p>
          </div>
          <h2 id="projects-title">
            Explore the work.
            <br />
            Inspect the code.
          </h2>
          <p>
            Independent projects spanning full-stack development, interfaces and
            social data. Live demos and source code, ready to explore.
          </p>
        </div>
        <div
          className="project-filters"
          role="group"
          aria-label="Filter projects"
        >
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
          <p role="status">{visible.length + Number(showFeatured)} projects</p>
        </div>
        {showFeatured && (
          <article id="la-nacion-cards" className="featured-project">
            <div className="featured-top">
              <span className="kicker">Featured case · Full stack</span>
              <span className="project-index">01</span>
            </div>
            <h3>La Nación Cards</h3>
            <p className="featured-intro">
              An editorial dashboard that turns news from external providers
              into a searchable, personal reading experience.
            </p>
            <div className="case-grid">
              <div>
                <h4>The experience</h4>
                <p>
                  Browse by section, search headlines and save stories locally.
                  Weather forecasts and browser speech synthesis bring context
                  and an alternative way to catch up.
                </p>
              </div>
              <div>
                <h4>The implementation</h4>
                <p>
                  React and TypeScript consume a Node.js endpoint on Vercel. The
                  server keeps the GNews key out of the client and uses public
                  RSS when no key is configured.
                </p>
              </div>
              <div>
                <h4>The engineering decisions</h4>
                <p>
                  Provider validation, a 12-second timeout and a five-minute
                  in-memory cache. On provider failure, a cached response can be
                  served for up to one hour and marked stale.
                </p>
              </div>
            </div>
            <div className="project-tags">
              {[
                "React",
                "TypeScript",
                "Node.js",
                "Vercel Functions",
                "Vitest",
              ].map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <details className="case-details">
              <summary>Scope, trade-offs & verification</summary>
              <p>
                Independent prototype, not an official LA NACION product or
                client engagement. Saved stories and reading history are local
                to the browser. Subscription forms and exchange rates are
                demonstrations; payments are not connected. The cache belongs to
                each server instance and can reset between invocations. The
                repository includes tests for external data and filtering, plus
                lint and TypeScript checks.
              </p>
            </details>
            <div className="featured-links">
              <a
                className="button"
                href="https://lanacioncards.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Explore live demo ↗
                <span className="sr-only"> — La Nación Cards</span>
              </a>
              <a
                href="https://github.com/tristanlgb/lanacioncards"
                target="_blank"
                rel="noreferrer"
              >
                View source ↗
                <span className="sr-only"> — La Nación Cards</span>
              </a>
            </div>
          </article>
        )}
        <div className="project-list">
          {visible.map((project) => (
            <article className="project-row" key={project.title}>
              <div className="project-number">
                {String(projects.indexOf(project) + 2).padStart(2, "0")}
              </div>
              <div className="project-main">
                <span>{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live demo ↗
                  <span className="sr-only"> — {project.title}</span>
                </a>
                {project.code && (
                  <a href={project.code} target="_blank" rel="noreferrer">
                    View source ↗
                    <span className="sr-only"> — {project.title}</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Projects;
