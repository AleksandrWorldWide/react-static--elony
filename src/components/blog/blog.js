import './blog.scss'
import blog1 from '@assets/images/blog1.png'
import blog2 from '@assets/images/blog2.png'
import blog3 from '@assets/images/blog3.png'

const Blog = () => {
	return (
		<section className="blog">
			<div className="blog__title">Блог</div>
			<div className="blog__content content-blog">
				<div className="content-blog__item item-blog">
				<div className="item-blog__img">
					<img src={blog1} alt="The future of 3D design" />
				</div>
				<div className="item-blog__name">The future of 3D design</div>
				<div className="item-blog__period">4 months ago</div>
				</div>

				<div className="content-blog__item item-blog">
				<div className="item-blog__img">
					<img src={blog2} alt="The future of 3D design" />
				</div>
				<div className="item-blog__name">The future of 3D design</div>
				<div className="item-blog__period">4 months ago</div>
				</div>

				<div className="content-blog__item item-blog">
				<div className="item-blog__img">
					<img src={blog3} alt="The future of 3D design" />
				</div>
				<div className="item-blog__name">The future of 3D design</div>
				<div className="item-blog__period">4 months ago</div>
				</div>
			</div>
			<div className="blog__btn">
				<button className='btn'>Читать Больше</button>
			</div>

		</section>
	)
}

export default Blog;