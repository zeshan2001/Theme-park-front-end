import Ride from '../components/Ride'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'


const Rides = () => {
  const [rides, setRides] = useState([])

  useEffect(() => {
    const getRides = async() => {
      let response = await axios.get(`${BASE_URL}/rides`)
      setRides(response.data)
    }

    getRides()
  }, [])

  return (
    <>
      <h1 className='header-text'>List of Rides</h1>
      <div className='rides'>
        {rides.length > 0 ? (
          rides.map((ride) => {
            return <Ride key={ride._id} ride={ride} />
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </>
  )
}
export default Rides
