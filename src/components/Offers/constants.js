import cardOneImage from 'assets/offers/card-1.png';
import cardTwoImage from 'assets/offers/card-2.png';
import cardThreeImage from 'assets/offers/card-3.png';
import cardFourImage from 'assets/offers/card-4.png';

const LEARN_MORE_HREF = '/learn-more';

const OFFER_CARDS = [
  {
    slug: 'card-1',
    title: 'Move the borders of reality!',
    subtitle: (
      // eslint-disable-next-line react/jsx-filename-extension
      <>
        Go on a space adventure
        <span className="offers-grid__text_md-hidden"> - it&apos;s possible with us!</span>
      </>
    ),
    imgSrc: cardOneImage,
    href: LEARN_MORE_HREF,
  },
  {
    slug: 'card-2',
    title: 'Space is not just stars and planets',
    subtitle: 'It is a majestic journey to',
    imgSrc: cardTwoImage,
    href: LEARN_MORE_HREF,
  },
  {
    slug: 'card-3',
    title: 'For those who dream of stars',
    subtitle: 'Our offer: make your dream come true',
    imgSrc: cardThreeImage,
    href: LEARN_MORE_HREF,
  },
  {
    slug: 'card-4',
    title: 'Fulfill your fantastic dreams',
    subtitle: 'Space has never been so close',
    imgSrc: cardFourImage,
    href: LEARN_MORE_HREF,
  },
];

export default OFFER_CARDS;
