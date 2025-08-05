import { Link } from 'react-router-dom'
const Ride = ({ ride }) => {
  return (
    <>
      <div className="ride-container">
        <div className="img-container">
          <img src={ride.image} alt="No Image" />
        </div>
        <div className="info-container">
          <div className="name-price">
            <h3>{ride.name}</h3>
            <p>Price: ${ride.price} </p>
          </div>
          <div>
            <p>{ride.description}</p>
            <div className="btn-container">
              <Link className="ride-btn-book" to={`/ticket/booking/${ride.id}`}>
                Book a ticket
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Ride
