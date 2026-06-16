import Link from 'next/link';
import { services } from '@/lib/site';

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <p className="eyebrow">Premium steel supply · Cambodia</p>
            <h1>Steel products and CNC cutting made easier for customers.</h1>
            <p className="lead">
              A clean Next.js business website for CSK Steel Center that shows services, products, project work, and a fast quote request flow.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-gold" href="/quote">
                Request a Quote
              </Link>
              <Link className="btn btn-outline" href="/services">
                View Services
              </Link>
            </div>
            <div className="hero-points">
              <div className="hero-point">CNC sheet cutting</div>
              <div className="hero-point">Steel materials</div>
              <div className="hero-point">Custom fabrication</div>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-logo-wrap">
              <img src="/logos/logo-gold-horizontal.png" alt="CSK Steel Center gold logo" />
            </div>
            <div className="hero-card-note">
              <b>Brand ready:</b>
              <span>The official CSK logo is used in the header, hero, footer, and brand sections.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>What customers can do on the website</h2>
            <p>The layout answers common questions first, then guides visitors to request a quotation with clear material details.</p>
          </div>
          <div className="grid-3">
            <article className="card">
              <div className="icon">01</div>
              <h3>Understand services</h3>
              <p>Customers can quickly see CNC cutting, steel supply, gate/fence hardware, and custom work.</p>
            </article>
            <article className="card gold">
              <div className="icon">02</div>
              <h3>Browse products</h3>
              <p>Product categories are ready for real photos, sizes, thickness, and stock information.</p>
            </article>
            <article className="card">
              <div className="icon">03</div>
              <h3>Request quote</h3>
              <p>The quote page creates a clean message that staff can receive by Telegram, email, or backend later.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <h2>Core services</h2>
            <p>Short service cards make the business easy to explain during a customer demo.</p>
          </div>
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

      <section className="section section-dark">
        <div className="container logo-strip">
          <div className="logo-mark">
            <img src="/logos/logo-gold-stacked.png" alt="CSK Steel Center stacked gold logo" />
          </div>
          <div className="logo-text">
            <p className="eyebrow">Brand direction</p>
            <h2>Modern navy and gold visual style.</h2>
            <p>
              Navy gives the website a strong industrial feeling. Gold adds a premium brand look. The design is cleaner, more customer-focused, and easier to demo than the previous version.
            </p>
            <Link className="btn btn-gold" href="/products">
              See Products
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Simple customer flow</h2>
            <p>The site is built around the way a steel customer normally asks for price and availability.</p>
          </div>
          <div className="steps">
            <div className="step"><h3>Choose service</h3><p>Customer selects CNC cutting, material supply, or custom fabrication.</p></div>
            <div className="step"><h3>Add material details</h3><p>They provide thickness, size, quantity, photo, drawing, or sample requirement.</p></div>
            <div className="step"><h3>Send request</h3><p>The quotation message is generated clearly for sales staff.</p></div>
            <div className="step"><h3>Follow up</h3><p>CSK replies by phone or Telegram with price, time, and availability.</p></div>
          </div>
        </div>
      </section>
    </main>
  );
}
