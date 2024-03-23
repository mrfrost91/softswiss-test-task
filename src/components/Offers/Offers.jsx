import classNames from 'classnames';
import { SectionTitle } from 'components/SectionTitle';
import { Card } from 'components/Card/';
import OFFER_CARDS from './constants';

function Offers({ className = null }) {
  return (
    <section className={classNames('offers', { [className]: className })}>
      <SectionTitle className="section-title_mb">Offers</SectionTitle>
      <div className="offers-grid">
        {OFFER_CARDS.map(({ slug, title, subtitle, imgSrc, href }) => (
          <Card key={slug} title={title} subtitle={subtitle} imgSrc={imgSrc} href={href} />
        ))}
      </div>
    </section>
  );
}

export default Offers;
