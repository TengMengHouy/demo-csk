'use client';

import { FormEvent, useState } from 'react';

type QuoteData = {
  name: string;
  phone: string;
  service: string;
  material: string;
  size: string;
  date: string;
  details: string;
};

const initialData: QuoteData = {
  name: '',
  phone: '',
  service: 'CNC sheet cutting',
  material: '',
  size: '',
  date: '',
  details: '',
};

export function QuoteForm() {
  const [data, setData] = useState<QuoteData>(initialData);
  const [message, setMessage] = useState('');
  const [copyText, setCopyText] = useState('Copy Message');

  function updateField(field: keyof QuoteData, value: string) {
    setData((current) => ({ ...current, [field]: value }));
  }

  function createMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const generatedMessage = `CSK Steel Center - Quote Request\n\nName: ${data.name || '-'}\nPhone/Telegram: ${data.phone || '-'}\nService: ${data.service || '-'}\nMaterial: ${data.material || '-'}\nSize / Quantity: ${data.size || '-'}\nNeeded date: ${data.date || '-'}\nDetails: ${data.details || '-'}\n\nPlease check price and availability.`;
    setMessage(generatedMessage);
    setCopyText('Copy Message');
  }

  async function copyMessage() {
    if (!message.trim()) {
      alert('Please create the quote message first.');
      return;
    }

    try {
      await navigator.clipboard.writeText(message);
      setCopyText('Copied');
      setTimeout(() => setCopyText('Copy Message'), 1400);
    } catch {
      alert('Copy is not available in this browser. Please select and copy manually.');
    }
  }

  return (
    <div className="quote-panel">
      <h2>Request quotation</h2>
      <p className="panel-intro">Fill this demo form to generate a clean Telegram-ready quote message.</p>

      <form className="form-grid" onSubmit={createMessage}>
        <div className="field">
          <label htmlFor="name">Customer name</label>
          <input id="name" value={data.name} onChange={(event) => updateField('name', event.target.value)} placeholder="Sokha" />
        </div>

        <div className="field">
          <label htmlFor="phone">Phone / Telegram</label>
          <input id="phone" value={data.phone} onChange={(event) => updateField('phone', event.target.value)} placeholder="012 345 678" />
        </div>

        <div className="field">
          <label htmlFor="service">Service</label>
          <select id="service" value={data.service} onChange={(event) => updateField('service', event.target.value)}>
            <option>CNC sheet cutting</option>
            <option>Steel material supply</option>
            <option>Gate and fence hardware</option>
            <option>Custom fabrication</option>
            <option>Other</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="material">Material</label>
          <input id="material" value={data.material} onChange={(event) => updateField('material', event.target.value)} placeholder="2mm steel sheet" />
        </div>

        <div className="field">
          <label htmlFor="size">Size / Quantity</label>
          <input id="size" value={data.size} onChange={(event) => updateField('size', event.target.value)} placeholder="1200x2400mm, 10 pieces" />
        </div>

        <div className="field">
          <label htmlFor="date">Needed date</label>
          <input id="date" value={data.date} onChange={(event) => updateField('date', event.target.value)} placeholder="This week" />
        </div>

        <div className="field full">
          <label htmlFor="details">Details</label>
          <textarea id="details" value={data.details} onChange={(event) => updateField('details', event.target.value)} placeholder="Decorative panel for gate. I can send drawing/photo by Telegram." />
        </div>

        <div className="field full form-actions">
          <button className="btn btn-primary" type="submit">
            Create Telegram Message
          </button>
          <button className="btn btn-light" type="button" onClick={copyMessage}>
            {copyText}
          </button>
        </div>
      </form>

      <div className="message-output" aria-live="polite">
        {message || 'Your generated quotation message will appear here.'}
      </div>
    </div>
  );
}
