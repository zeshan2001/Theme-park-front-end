import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Ticket = () => {
  let navigate = useNavigate()
  const { ticketId } = useParams()
  // const [ticket_id, setTicket_id] = useState('')
  const [ticketInfo, setTicketInfo] = useState(null)
  const [rideInfo, setRideInfo] = useState(null)
  let ticketInfoo

  const deleteTicket = async () => {
    await axios.delete(`http://localhost:3001/ticket/${ticketId}`)
  
    navigate(`/ticket/${null}`)
  }

  useEffect(() => {
    const getTicket = async () => {
      const response = await axios.get(
        `http://localhost:3001/ticket/${ticketId}`
      )

      ticketInfoo = response.data
      setTicketInfo(response.data)
    }

    ticketId ? getTicket() : console.log('Noooooooooooo')

    setTimeout(async () => {
      const resRide = await axios.get(
        `http://localhost:3001/rides/${ticketInfoo.ride}`
      )
      console.log(resRide.data)
      setRideInfo(resRide.data)
    }, 1000)
  }, [ticketId])

  return (
    <>
      <h1>ticket</h1>
      <div>
        {ticketInfo && rideInfo ? (
          <>
            <div className="ticket-conatiner">
              <div>
                <img src={rideInfo.image} alt="" width={200} height={200} />
              </div>
              <h1>{rideInfo.name}</h1>
              <p>price: ${rideInfo.price}</p>
              <p>{rideInfo.description}</p>
              <p>{ticketInfo.name}</p>
              <p>{ticketInfo.purchase_date.split('T')[0]}</p>
              <a onClick={deleteTicket} href={`/ticket/${null}`}>
              <button>Delete</button>
              </a>
            </div>
          </>
        ) : (
          <h1>please enter your ticket id to display...</h1>
        )}
      </div>
    </>
  )
}
export default Ticket
