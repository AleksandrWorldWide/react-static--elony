import 'normalize.css';
import Header from '@components/header/header';
import Main from '@components/main/main';
import Footer from '@components/footer/footer';
import Portfolio from '@components/portfolio/portfolio';
import Blog from '@components/blog/blog'
import About from '@components/about/about'
import Contacts from '@components/contacts/contacts';
import './app.scss';


export default function App() {
	return (
		<div className="app">
			<Header/>
			<Main/>
			<Portfolio/>
			<Blog/>
			<About/>
			<Contacts/>
			<Footer/>
		</div>
		
	)
}