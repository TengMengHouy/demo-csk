import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projectPlaceholders } from '@/lib/site';

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projectPlaceholders.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projectPlaceholders.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.title,
    description: project.text,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projectPlaceholders.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <section className="detail-hero">
        <div className="container detail-hero-grid">
          <div>
            <p className="eyebrow">Project Detail</p>
            <h1>{project.title}</h1>
            <p className="detail-lead">{project.intro}</p>

            <div className="hero-actions">
              <Link className="btn btn-gold" href="/quote">
                Request Similar Project
              </Link>
              <Link className="btn btn-outline" href="/projects">
                Back to Projects
              </Link>
            </div>
          </div>

          <div className="detail-logo-card">
            <img src="/logos/logo-gold-stacked.png" alt="CSK Steel Center logo" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <article className="contact-panel">
            <h2>Project Highlights</h2>
            <ul className="mini-list">
              {project.highlights.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </article>

          <article className="contact-panel">
            <h2>Image Placeholder</h2>
            <div className="project-detail-image">
              <img src="/logos/logo-gold-stacked.png" alt="CSK Steel Center logo" />
            </div>
            <p className="panel-intro">
              Replace this logo placeholder with real project photos before customer launch.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container split">
          <div>
            <p className="eyebrow">Customer Trust</p>
            <h2>Use real photos here later</h2>
            <p>
              For the real website, add project photos, customer site photos, material photos,
              finished product photos, and before-after photos.
            </p>
          </div>

          <div className="dark-card">
            <h3>Demo explanation</h3>
            <p>
              Tell the customer: this section is ready for real CSK project photos. The design is
              already prepared, and the content can be updated anytime.
            </p>
            <Link className="btn btn-gold" href="/contact">
              Contact CSK
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
