import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Ticket = () => {
  const { ticketId } = useParams()
  const [ticketInfo, setTicketInfo] = useState(null)

  const deleteTicket = async () => {
    await axios.delete(`http://localhost:3001/ticket/${ticketId}`)
    setTicketInfo(null)
  }

  useEffect(() => {
    const getTicket = async () => {
      const response = await axios.get(
        `http://localhost:3001/ticket/${ticketId}`
      )
      console.log(response.data)
      setTicketInfo(response.data)
    }

    ticketId !== 'null' && getTicket()
  }, [ticketId])

  return (
    <>
      <h1>ticket</h1>
      <div>
        {ticketInfo ? (
          <>
            <div className="ticket-conatiner">
              <div>
                <img
                  src={ticketInfo.ride.image}
                  alt=""
                  width={200}
                  height={200}
                />
              </div>
              <h1>{ticketInfo.ride.name}</h1>
              <p>price: ${ticketInfo.ride.price}</p>
              <p>{ticketInfo.ride.description}</p>
              <p>{ticketInfo.name}</p>
              <p>{ticketInfo.purchase_date.split('T')[0]}</p>

              <button onClick={deleteTicket}>Delete</button>
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
