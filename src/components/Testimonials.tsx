function Testimonials() {
  return (
    <section id="hire" className="section py-5 bg-light">
      <div className="container">
        <div className="section-header fade-in-up">
          <span className="eyebrow">🚀 Hire Me</span>
          <h2>Why I'm a strong full stack developer</h2>
          <p className="section-intro">
            I'm passionate about building scalable applications with good architecture, reusable components, and great user experience.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-lg-12 fade-in-up delay-1">
            <div className="card border-0 shadow-sm h-100 p-4">
              <p className="text-muted">
                I specialize in crafting modern, scalable web applications using powerful technologies like React, TypeScript, and Vite on the frontend — combined with robust, maintainable backends using NestJS.
              </p>
              <p className="text-muted">
                My focus on clean architecture, reusable components, and performance-driven design ensures that I build apps that not only work great but are easy to scale and maintain.
              </p>
              <p className="text-muted">
                Whether it's designing intuitive UI/UX, implementing secure APIs, or integrating with cloud services, I bring a balanced mix of frontend and backend skills. I'm committed to writing quality code, collaborating with teams, and continuously learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;
