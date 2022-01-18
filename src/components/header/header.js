import './header.scss'
import logo from '@assets/icons/logo.png'

const Header = () => {
	return (
		<header className="header">
			<div className="header__logo">
				<img src={logo} alt='logo'></img>
			</div>
			<nav className="header__menu">
				<ul className="header__list list-header">
					<li className="list-header__item">
						<a href="/#" className="list-header__link">Дизайн</a>
						</li>
					<li className="list-header__item">
						<a href="/#" className="list-header__link">Разработка</a>
						</li>
					<li className="list-header__item">
						<a href="/#" className="list-header__link">SMM</a>
						</li>
					<li className="list-header__item">
						<a href="/#" className="list-header__link">Портфолио</a>
						</li>
					<li className="list-header__item">
						<a href="/#" className="list-header__link">Блог</a>
						</li>
					<li className="list-header__item">
						<a href="/#" className="list-header__link">О нас</a>
						</li>
					<li className="list-header__item">
						<a href="/#" className="list-header__link">Хочу начать</a>
						</li>
				</ul>
			</nav>
			<div className="header__lang lang-header">
				<a href="/#" className="lang-header__link">UA</a>
			</div>
		</header>
	)
}

export default Header;