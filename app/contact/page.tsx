import { PageHero } from '@/components/PageHero';
import { site } from '@/lib/site';

export const metadata = {
  title: 'Contact',
  description: 'Contact CSK Steel Center by phone, Telegram, or shop location.',
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Make it easy for customers to call, message, or visit."
        description="This page is prepared for real phone numbers, Telegram contact, address, working hours, and Google Map embed."
      />

      <section className="section">
        <div className="container split">
          <div className="contact-panel">
            <h2>Contact information</h2>
            <p className="panel-intro">Replace or confirm these details before final launch.</p>
            <ul className="mini-list">
              <li>Phone: <a href="tel:078288883">{site.phonePrimary}</a></li>
              <li>Phone: <a href="tel:086960606">{site.phoneSecondary}</a></li>
              <li>Telegram: {site.telegram}</li>
              <li>Address: Add real CSK Steel Center shop address</li>
              <li>Working hours: Add real opening and closing time</li>
            </ul>
          </div>

          <div className="contact-panel">
            <h2>Map area</h2>
            <p className="panel-intro">Use a Google Maps embed here before production deployment.</p>
            <div className="map-placeholder">
              Google Map placeholder<br />Add real shop location before launch
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="stats">
            <div className="stat"><b>01</b><span>Call</span></div>
            <div className="stat"><b>02</b><span>Send drawing/photo</span></div>
            <div className="stat"><b>03</b><span>Receive quote</span></div>
          </div>
        </div>
      </section>
    </main>
  );
}
