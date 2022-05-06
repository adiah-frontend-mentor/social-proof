import './testimonial.scss'; 

const Testimonial = ({name, image, message}) => {
    return (
        <div className='testimonial'>
            <div className='testimonial__header'>
                <img src={image} alt={`${name} avatar`} />
                <h2>{name}</h2>
                <p>Verified Buyer</p>
            </div>
            <p className="testimonial__body">{message}</p>
        </div>
    )
}

export default Testimonial