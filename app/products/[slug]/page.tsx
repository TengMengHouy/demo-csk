import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products } from '@/lib/site';

type ProductDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: product.title,
    description: product.text,
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main>
      <section className="detail-hero">
        <div className="container detail-hero-grid">
          <div>
            <p className="eyebrow">Product Detail</p>
            <h1>{product.title}</h1>
            <p className="detail-lead">{product.intro}</p>

            <div className="hero-actions">
              <Link className="btn btn-gold" href="/quote">
                Request Quote
              </Link>
              <Link className="btn btn-outline" href="/products">
                Back to Products
              </Link>
            </div>
          </div>

          <div className="detail-logo-card">
            <img src="/logos/logo-gold-stacked.png" alt="CSK Steel Center logo" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container detail-grid">
          <article className="contact-panel">
            <h2>Applications</h2>
            <ul className="mini-list">
              {product.applications.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </article>

          <article className="contact-panel">
            <h2>Product Notes</h2>
            <ul className="mini-list">
              {product.specs.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container split">
          <div>
            <p className="eyebrow">Quote Requirement</p>
            <h2>What customer should prepare</h2>
            <p>
              For faster quotation, customer should send product type, size, thickness, quantity,
              drawing or photo, and delivery requirement.
            </p>
          </div>

          <div className="contact-panel">
            <h2>Send to CSK</h2>
            <p className="panel-intro">
              Use the quote page to create a clean Telegram-ready message for this product.
            </p>
            <Link className="btn btn-primary" href="/quote">
              Create Quote Message
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
