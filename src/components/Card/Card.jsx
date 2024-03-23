import { Button } from 'components/Button';

function Card({
  title = 'Offer card title',
  subtitle = 'Offer card subtitle',
  buttonText = 'Learn more',
  imgSrc = null,
  href = null,
}) {
  return (
    <div className="card">
      <img src={imgSrc} alt="offer-card" className="card__bg-image" />
      <div className="card__bg-gradient" />
      <div className="card__content-container">
        <h4 className="card__title">{title}</h4>
        <p className="card__subtitle">{subtitle}</p>
        <Button href={href} variant="outlined">{buttonText}</Button>
      </div>
    </div>
  );
}

export default Card;
