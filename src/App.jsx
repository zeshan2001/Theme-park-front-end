import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Rides from './pages/Rides'
import BookingForm from './pages/BookingForm'
import Ticket from './pages/Ticket'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const navigate = useNavigate()
  const initialState = {
    name: '',
    purchase_date: '',
    ride: ''
  }

  const [formState, setFormState] = useState(initialState)
  const [ticketId, setTicketId] = useState(null)
  const [rideId, setRideId] = useState(null)

  const getRideId = (id) => {
    setRideId(id)
  }
  const handleChange = (event) => {
    formState.ride = rideId
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    let response = await axios.post(
      'http://localhost:3001/ticket/new',
      formState
    )

    setTicketId(response.data._id)
    setFormState(initialState)
    setRideId(null)
  }

  useEffect(() => {
    if (ticketId) {
      navigate(`/ticket/${ticketId}`)
      setTicketId(null)
    }
  }, [ticketId])

  return (
    <>
      <Header ticketId={ticketId} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rides" element={<Rides />} />
          <Route
            path="/ticket/booking/:rideId"
            element={
              <BookingForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                formState={formState}
                getRideId={getRideId}
              />
            }
          />
          <Route path="/ticket/:ticketId" element={<Ticket />} />
        </Routes>
      </main>
    </>
  )
}

export default App
