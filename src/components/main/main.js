import './main.scss';

const Main = () => {
	return (
		<main className='main'>
			<div className="main__content content-main">
				<div className="content-main__title">
					Превращаем ваши идеи в крутые продукты
				</div>
				<div className="content-main__btn">
						<button className="btn">Начнем Превращение</button>
				</div>
			</div>
			<div className="main__body body-main">

				<div className="body-main__card body-card body-card_design">
					<div className="body-card__title">Дизайн</div>
					<ul className="body-card__list">
						<li >Дизайн Сайтов</li>
						<li >Дизайн Лого и Фирменного стиля</li>
						<li >Дизайн Интерфейсов UI/UX</li>
						<li >Дизайн Мобильных приложений</li>
					</ul>
					<div className="body-card__btn">
						<button className="btn">Узнать Больше</button>
					</div>
				</div>

				<div className="body-main__card body-card body-card_dev">
					<div className="body-card__title">Разработка</div>
					<ul className="body-card__list list-card">
						<li className="list-card__item">Создание сайтов и сложных CRM</li>
						<li className="list-card__item">Создание интернет магазинов</li>
						<li className="list-card__item">Создание мобильных приложений</li>
						<li className="list-card__item">Обслуживание и поддержка сайтов</li>
					</ul>
					<div className="body-card__btn">
						<button className="btn">Узнать Больше</button>
					</div>
				</div>

				<div className="body-main__card body-card body-card_smm">
					<div className="body-card__title">SMM</div>
					<ul className="body-card__list list-card">
						<li className="list-card__item">Продвижение Личной страницы</li>
						<li className="list-card__item">Продвижение Бизнес страницы</li>
						<li className="list-card__item">Создание контента для страниц</li>
						<li className="list-card__item">Создание контент плана</li>
					</ul>
					<div className="body-card__btn">
						<button className="btn">Узнать Больше</button>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Main;