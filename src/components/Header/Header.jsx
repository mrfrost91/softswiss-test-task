import { ReactComponent as Logo } from 'assets/header/logo.svg';
import { ReactComponent as CartHoveredIcon } from 'assets/header/cart_hovered.svg';
import BurgerMenu from './BurgerMenu';

const HEADER_NAV_ITEMS = [
  { slug: 'home', name: 'Home', href: '/home' },
  { slug: 'products', name: 'Products', href: '/products' },
  {
    slug: 'cart',
    name: 'Cart',
    href: '/cart',
    icon: <CartHoveredIcon className="navigation__cart-icon" />,
  },
];

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <a href="/" aria-label="Website logo" className="header__logo-link">
          <Logo className="header__logo" />
        </a>
        <BurgerMenu />
        <nav className="navigation">
          <ul className="navigation__list">
            {HEADER_NAV_ITEMS.map(({ slug, name, href, icon }) => {
              return (
                <li key={slug} className="navigation__list-item">
                  <a className="navigation__link" href={href} aria-label={name}>
                    {icon || name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
