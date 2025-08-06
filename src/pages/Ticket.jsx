import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SearchTicket from '../components/SearchTicket'

const Ticket = () => {
  const { ticketId } = useParams()
  const [ticketInfo, setTicketInfo] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  const deleteTicket = async () => {
    ticketId !== 'null'
      ? await axios.delete(`http://localhost:3001/ticket/${ticketId}`)
      : await axios.delete(`http://localhost:3001/ticket/${searchQuery}`)
    setSearchQuery('')
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

  const getSearchResult = async (e) => {
    e.preventDefault()
    let response = await axios.get(
      `http://localhost:3001/ticket/${searchQuery}`
    )

    setTicketInfo(response.data)
    // setSearchQuery('')
  }

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  return (
    <>
      <div className="search-ticket-container">
        <SearchTicket
          onChange={handleChange}
          value={searchQuery}
          onSubmit={getSearchResult}
        />

        {ticketInfo ? (
          <>
            <div className="ticket-conatiner">
              <div className="img-div">
                <img
                  src={ticketInfo.ride.image}
                  alt=""
                  width={200}
                  height={200}
                />
              </div>
              <div className="ticket-detail">
                <h1>{ticketInfo.ride.name}</h1>
                <hr />
                <p className="name">
                  <b>Name:</b>
                  <span>{ticketInfo.name}</span>
                </p>
                <p className="date">
                  <b>Date:</b>
                  <span>{ticketInfo.purchase_date.split('T')[0]}</span>
                </p>
                <p className="price">
                  <b>${ticketInfo.ride.price}</b>
                </p>
                <p className="ticketId">
                  <b>Ticket ID: </b>
                  <span>{ticketInfo._id}</span>
                </p>
              </div>
              <div className="delete-btn">
                <button onClick={deleteTicket}>Delete</button>
              </div>
            </div>
          </>
        ) : (
          <h1 className="empty-msg">Please enter your ID</h1>
        )}
      </div>
    </>
  )
}
export default Ticket
