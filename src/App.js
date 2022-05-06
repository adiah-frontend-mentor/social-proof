import Rating from "./components/rating/Rating";
import Testimonial from "./components/testimonial/Testimonial";
import './app.scss';

import colton from './images/image-colton.jpg';
import anne from './images/image-anne.jpg';
import irene from './images/image-irene.jpg';

const ratingData = [
  {
    rating: 5,
    category: 'Reviews'
  },
  {
    rating: 5,
    category: 'Report Guru'
  },
  {
    rating: 5,
    category: 'BestTech'
  }
]

const testimonialData = [
  {
    name: 'Colton Smith',
    image: colton,
    message: 'We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!'
  },
  {
    name: 'Irene Roberts',
    image: irene,
    message: 'Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.'
  },
  {
    name: 'Anne Wallace',
    image: anne,
    message: 'Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!'
  }
]

function App() {

  const ratingElements = ratingData.map(rating => 
    <Rating 
      rating={rating.rating} 
      category={rating.category}
      key={rating.category}
    />
  );

  const testimonialList = testimonialData.map(testimonial =>
    <Testimonial 
      name={testimonial.name}
      image={testimonial.image}
      message={testimonial.message}
      key={testimonial.name}
    />
  )

  return (
    <>
    <div className="hero">
      <h1>10,000+ of our users love our products.</h1>
      <p>
        We only provide great products combined with excellent customer service.
        See what our satisfied customers are saying about our services.
      </p>
    </div>
    <div className="ratings">
      {ratingElements}
    </div>
    <div className="testimonials">
      {testimonialList}
    </div>
    </>
  );
}

export default App;
