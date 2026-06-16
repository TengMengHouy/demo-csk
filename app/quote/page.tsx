import { PageHero } from '@/components/PageHero';
import { QuoteForm } from '@/components/QuoteForm';

export const metadata = {
  title: 'Quote',
  description: 'Request a quotation from CSK Steel Center for CNC cutting, steel materials, gate parts, and custom fabrication.',
};

export default function QuotePage() {
  return (
    <main>
      <PageHero
        eyebrow="Quote request"
        title="Turn customer details into a clean quote message."
        description="The demo form creates a Telegram-ready message. Later it can connect to Telegram bot, email, Google Sheets, or backend API."
      />

      <section className="section">
        <div className="container split">
          <QuoteForm />

          <aside className="contact-panel">
            <h2>Demo sample</h2>
            <p className="panel-intro">Use this sample during the customer demo.</p>
            <ul className="mini-list">
              <li>Name: Sokha</li>
              <li>Phone/Telegram: 012 345 678</li>
              <li>Service: CNC sheet cutting</li>
              <li>Material: 2mm steel sheet</li>
              <li>Size/Quantity: 1200x2400mm, 10 pieces</li>
              <li>Details: Decorative panel for gate</li>
            </ul>
            <br />
            <h2>Production upgrade</h2>
            <p className="panel-intro">Connect this form to a real backend, Telegram bot, email inbox, or Google Sheets to make it operational.</p>
          </aside>
        </div>
      </section>
    </main>
  );
}
