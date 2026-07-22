const projects = [
  { number:'01', title:'Social Observatory', type:'Data visualization · Social research', description:'A responsible, accessible dashboard that compares socioeconomic samples from 2016 and 2024 while making methodological limits and privacy considerations explicit.', tags:['Data storytelling','Chart.js','Accessible UI'], live:'https://app-graficos-clase-social.vercel.app/', code:'https://github.com/tristanlgb/AppGraficosClaseSocial', tone:'green' },
  { number:'02', title:'Interactive Pokédex', type:'Interactive systems · 3D experience', description:'An immersive Pokédex that turns API data into an exploratory interface with interactive 3D elements and visual representations of processes and interruptions.', tags:['Interactive 3D','Process visualization','PokéAPI'], live:'https://pokedex-pokeapi-ruddy.vercel.app/', code:'', tone:'blue' },
  { number:'03', title:'Full-Stack Commerce', type:'End-to-end product', description:'A complete shopping experience with secure authentication, product management, persistent data, and a responsive customer-facing interface.', tags:['Product architecture','Authentication','MongoDB'], live:'https://tpfinal-react-lenzberg.vercel.app/', code:'https://github.com/tristanlgb/TPFinal_React_Lenzberg', tone:'purple' },
  { number:'04', title:'Academic Administration', type:'Operations platform', description:'A structured portal for managing students, courses, and enrolments, with search tools and an interface designed around everyday administrative tasks.', tags:['Angular','Information design','Responsive'], live:'https://trabajo-final-angular-indol.vercel.app/', code:'https://github.com/tristanlgb/TrabajoFinalAngular', tone:'orange' }
]

function Projects() {
  return <section id="projects" className="projects-section"><div className="shell">
    <div className="projects-heading"><div className="section-label light"><span>02</span><p>Selected work</p></div><h2>Projects where technology serves a clear purpose.</h2><p>A focused selection spanning social data, interactive experiences, commerce, and institutional tools.</p></div>
    <div className="project-list">{projects.map(project => <article className={`project-row ${project.tone}`} key={project.title}>
      <div className="project-number">{project.number}</div><div className="project-main"><span>{project.type}</span><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
      <div className="project-links">{project.live && <a href={project.live} target="_blank" rel="noreferrer">Live project ↗</a>}{project.code && <a href={project.code} target="_blank" rel="noreferrer">View source ↗</a>}</div>
    </article>)}</div>
  </div></section>
}
export default Projects
