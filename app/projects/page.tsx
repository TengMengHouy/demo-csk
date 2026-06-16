import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { projectPlaceholders } from '@/lib/site';

export const metadata = {
  title: 'Projects',
  description:
    'CSK Steel Center project gallery layout for CNC cutting, gate and fence work, material supply, and custom fabrication.',
};

export default function ProjectsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Projects"
        title="Project gallery with detail pages."
        description="Show CNC work, gate and fence projects, steel supply, and custom fabrication examples to build customer trust."
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Project showcase</h2>
            <p>
              Each project category now has its own detail page. Later you can replace the logo
              placeholder with real customer project photos.
            </p>
          </div>

          <div className="grid-4">
            {projectPlaceholders.map((project) => (
              <article className="project project-with-logo" key={project.slug}>
                <img src="/logos/logo-white-stacked.png" alt="CSK Steel Center logo" />

                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>

                  <Link className="project-link" href={`/projects/${project.slug}`}>
                    View project detail →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container split">
          <div className="contact-panel">
            <h2>Photo checklist</h2>
            <ul className="mini-list">
              <li>✓ CNC machine working photos</li>
              <li>✓ Steel sheet and pipe stock photos</li>
              <li>✓ Finished gate, fence, and decorative panel photos</li>
              <li>✓ Before-and-after custom fabrication photos</li>
            </ul>
          </div>

          <div className="contact-panel">
            <h2>Why this matters</h2>
            <p className="panel-intro">
              Customers trust steel shops more when they can see real work quality. This page is
              important for customer confidence.
            </p>
            <Link className="btn btn-primary" href="/quote">
              Start Quote Request
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
