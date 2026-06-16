type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  logo?: 'gold' | 'white' | 'navy';
};

export function PageHero({ eyebrow, title, description, logo = 'gold' }: PageHeroProps) {
  const src = logo === 'gold' ? '/logos/logo-gold-horizontal.png' : logo === 'white' ? '/logos/logo-white-horizontal.png' : '/logos/logo-navy-horizontal.png';

  return (
    <section className="page-hero">
      <div className="container">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className="page-logo-card">
          <img src={src} alt="CSK Steel Center logo" />
        </div>
      </div>
    </section>
  );
}
