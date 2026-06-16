import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { products } from '@/lib/site';

export const metadata = {
  title: 'Products',
  description:
    'CSK Steel Center product categories for steel sheets, pipes, bars, gate parts, CNC decorative panels, and custom order items.',
};

export default function ProductsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Products"
        title="Steel product categories with detail pages."
        description="Customers can browse steel sheets, pipes, gate parts, CNC decorative panels, and custom order items before requesting a quotation."
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Steel product categories</h2>
            <p>
              Each product now has its own detail page. Later you can add real product photos,
              sizes, thickness, stock status, and prices.
            </p>
          </div>

          <div className="grid-3">
            {products.map((product) => (
              <article className="card product-card" key={product.slug}>
                <div className="product-visual logo-visual">
                  <img src="/logos/logo-gold-stacked.png" alt="CSK Steel Center logo" />
                </div>

                <div className="content">
                  <h3>{product.title}</h3>
                  <p>{product.text}</p>

                  <Link className="text-link" href={`/products/${product.slug}`}>
                    View product detail →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container split">
          <div>
            <p className="eyebrow">Catalog direction</p>
            <h2>Ready for real stock and photos</h2>
            <p>
              Add real product images, SKU names, size tables, thickness options, and stock
              availability. This will make the website feel like a real steel catalog.
            </p>
          </div>

          <div className="dark-card">
            <h3>For customer demo</h3>
            <p>
              Explain that these product pages are ready for real CSK product data. The structure
              is finished; only real photos and stock details need to be added.
            </p>
            <Link className="btn btn-gold" href="/quote">
              Ask for Product Price
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
