import './contacts.scss'
import fb from '@assets/icons/facebook.png'
import lin from '@assets/icons/in.png'
import inst from '@assets/icons/instagram.png'

const Contacts = () => {
	return (
		<section className="contacts">
		<div className="contacts__form form-contacts">
			<div className="form-contacts__title">Контактная форма</div>
			<div className="form-contacts__inputs">
				<input name='text' type="text" placeholder='Ваше Имя'/>
				<input name='email' type="email" placeholder='E-mail'/>
			</div>
			<div className="form-contacts__text">
				<textarea name='textarea' placeholder='Текст сообщения'></textarea>
			</div>
			<div className="form-contacts__btn">
				<button className="btn">Отправить</button>
			</div>
		</div>
		<div className="contacts__adrresse addresse-contacts">
			<div className="addresse-contacts__title">Контакты</div>
			<div className="addresse-contacts__adres">Ukraine, Lviv, Naukova str. 7D, "Optima Plaza"</div>
			<div className="addresse-contacts__email">info@elone.agency</div>
			<div className="addresse-contacts__social social-contacts">
				<div className="social-contacts__fb">
					<img src = {fb} alt='facebook'/>
				</div>
				<div className="social-contacts__in">
				<img src = {lin} alt='link'/>
				</div>
				<div className="social-contacts__inst">
				<img src = {inst} alt='instagramm'/>
				</div>
			</div>
		</div>
	</section>
	)
	
}

export default Contacts