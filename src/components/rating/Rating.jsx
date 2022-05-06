import './rating.scss';
import Star from '../star/Star';

const Rating = ({rating, category}) => {
  const stars = [];

  for (let i = 0; i < rating; i++) {
    stars.push(<Star filled={true} key={i}/>)
  }

  for (let i = 0; i < 5-rating; i++) {
    stars.push(<Star filled={false} key={i + rating}/>)
  }


  return (
	<div className='rating-box'>
    {/* Have five stars, and count out the correct amount and fill them in and leave the others dull (change the color) */}
    <div className='star-container'>
      {stars}
    </div>
    <p>Rated {rating} stars in {category}</p>
  </div>
  )
}

export default Rating