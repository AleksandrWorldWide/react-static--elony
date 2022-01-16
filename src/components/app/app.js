import 'normalize.css';
import Header from '@components/header/header';
import Footer from '@components/footer/footer';
import wow from '@assets/images/wow.jpg';
import './app.scss';


export default function App() {
	return (
		<div className="app">
			<Header/>
			<h1>Hallo</h1>
			<img src={wow} alt="wow" />
			<Footer/>
		</div>
		
	)
}