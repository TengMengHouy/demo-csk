import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { services } from '@/lib/site';

export const metadata = {
  title: 'Services',
  description: 'CSK Steel Center services: CNC sheet cutting, steel supply, gate and fence hardware, and custom fabrication.',
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Clear steel services for faster customer decisions."
        description="Show CNC cutting, material supply, gate and fence hardware, and custom fabrication in a simple professional layout."
      />

      <section className="section">
        <div className="container">
          <div className="grid-4">
            {services.map((service) => (
              <article className="card" key={service.title}>
                <div className="icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container split">
          <div>
            <div className="section-head">
              <h2>What customers should prepare</h2>
            </div>
            <ul className="check-list">
              <li><strong>Material type:</strong> steel sheet, pipe, plate, bar, decorative part, or other item.</li>
              <li><strong>Thickness and size:</strong> width, height, length, thickness, or drawing dimensions.</li>
              <li><strong>Quantity:</strong> number of pieces, total meter, or expected project volume.</li>
              <li><strong>Reference:</strong> photo, drawing, sample, pattern, or installation requirement.</li>
            </ul>
          </div>
          <div className="contact-panel">
            <h2>Customer benefit</h2>
            <p className="panel-intro">This page reduces repeated calls because the website explains what CSK can do before the customer contacts staff.</p>
            <div className="badge-row">
              <span className="badge">Less confusion</span>
              <span className="badge">Faster quote</span>
              <span className="badge">Professional brand</span>
            </div>
            <br />
            <Link className="btn btn-primary" href="/quote">Request Quote</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
