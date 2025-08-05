import Ride from '../components/Ride'
import { useState, useEffect } from 'react'
import { rideList } from '../data/rides'

const Rides = () => {
  const [rides, setRides] = useState([])
  useEffect(() => {
    setRides(rideList)
  }, [])

  return (
    <>
      <h1 className='header-text'>List of Rides</h1>
      <div className='rides'>
        {rides.length > 0 ? (
          rides.map((ride) => {
            return <Ride key={ride.id} ride={ride} />
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </>
  )
}
export default Rides
