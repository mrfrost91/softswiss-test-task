import classNames from 'classnames';
import { SectionTitle } from 'components/SectionTitle';
import { Button } from 'components/Button';

function InfoText({ className }) {
  return (
    <section className={classNames({ [className]: className })}>
      <SectionTitle className="section-title_mb">Embark on a space journey</SectionTitle>
      <p className="info-text__paragraph">
        Travelling into space is one of the most exciting and unforgettable adventures that can
        change your life forever. And if you have ever dreamed of exploring stars, planets and
        galaxies, then our company is ready to help you realize this dream. We offer a unique
        experience that will allow you to go on a space journey and see all the secrets of the
        universe. We guarantee that every moment in space will be filled with incredible
        impressions, excitement and new discoveries. Our team of professionals takes care of your
        safety and comfort so that you can fully enjoy your adventure in space. We offer various
        options for space excursions.
      </p>
      <Button href="/read-more" variant="text">
        Read more
      </Button>
    </section>
  );
}

export default InfoText;
