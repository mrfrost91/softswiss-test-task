import classNames from 'classnames';
import { Button } from 'components/Button';

function Banner({ className = null }) {
  return (
    <section className={classNames('banner', { [className]: className })}>
      <div className="banner__content-container">
        <h1 className="banner__title">
          Discover the vast expanses of <span className="banner__title_color-pink">space</span>
        </h1>
        <h2 className="banner__subtitle">
          Where the possibilities are{' '}
          <span className="banner__subtitle_color-toxic-yellow">endless!</span>
        </h2>
        <Button href="/learn-more">Learn more</Button>
      </div>
    </section>
  );
}

export default Banner;
