import './portfolio.scss'
import love from '@assets/images/love.png'
import civic from '@assets/images/civic.png'
import wed from '@assets/images/wed.png'

const Portfolio = () => {
	return (
		<section className='portfolio'>
			<div className="portfolio__title">Портфолио</div>
			<nav className="portfolio__menu menu-portfolio">
				<ul className="menu-portfolio__list">
					<li className="menu-portfolio__item">
						<a href="/#" className="menu-portfolio__link">Все проекты</a>
						</li>
					<li className="menu-portfolio__item">
						<a href="/#" className="menu-portfolio__link">Дизайн</a>
						</li>
					<li className="menu-portfolio__item">
						<a href="/#" className="menu-portfolio__link">Разработка</a>
						</li>
					<li className="menu-portfolio__item">
						<a href="/#" className="menu-portfolio__link">SMM</a>
						</li>
				</ul>
			</nav>
			<div className="portfolio__content content-portfolio">
				<div className="content-portfolio__card card-portfolio">
					<div className="card-portfolio__img ibg">
						<img src={love} alt='LOVE GOODLY'/>
					</div>
					<div className="card-portfolio__name">LOVE GOODLY</div>
					<div className="card-portfolio__subname">Love Goodly eCommerce Website</div>
				</div>

				<div className="content-portfolio__card card-portfolio">
					<div className="card-portfolio__img ibg">
						<img src={civic} alt='CIVIC'/>
					</div>
					<div className="card-portfolio__name">CIVIC</div>
					<div className="card-portfolio__subname">Civic Financial Services</div>
				</div>

				<div className="content-portfolio__card card-portfolio">
					<div className="card-portfolio__img ibg">
						<img src={wed} alt='WEDGEWOOD'/>
					</div>
					<div className="card-portfolio__name">WEDGEWOOD</div>
					<div className="card-portfolio__subname">Real Estate Industry</div>
				</div>
			</div>
		</section>
	)
}

export default Portfolio;