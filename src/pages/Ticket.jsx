import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Ticket = () => {
  const { ticketId } = useParams()
  const [ticket_id, setTicket_id] = useState(null)

  useEffect(() => {
    setTicket_id(parseInt(ticketId))
  }, [ticketId])
  return (
    <>
    <h1>ticket</h1>
    <div>
      {
        ticket_id ? (
          <h1>{ticket_id}</h1>
        ) : (
          <h1>
            please enter your ticket id to display...
          </h1>
        )
      }
    </div>
    </>
  )
}
export default Ticket