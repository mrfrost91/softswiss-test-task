import rocketPicture from 'assets/footer/rocket.png';

function Footer() {
  return (
    <footer className="footer">
      <img src={rocketPicture} alt="rocket" />
      <p className="footer__text">Exciting space adventure!</p>
    </footer>
  );
}

export default Footer;
