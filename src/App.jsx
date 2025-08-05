import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
// import Home from './pages/Home'
import Header from './components/Header'
import Home from './pages/Home'
import Rides from './pages/Rides'
import BookingForm from './pages/BookingForm'
import Ticket from './pages/Ticket'
import { useState } from 'react'

function App() {
  const navigate = useNavigate()
  const initialState = {
    name: '',
    purchase_date: '',
    ride: null
  }

  const [formState, setFormState] = useState(initialState)
  const [ticketId, setTicketId] = useState(null)

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: [event.target.value]
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // do something with the data in the component state

    // *****************************************************************
    // in the backend in post issue api, after they create the issue, they store it in variable called newIssue
    // res.status(200).send(newIssue)
    // *****************************************************************

    // const response = await axios.post('http://localhost:3001/issues', formState)
    // console.log(response.data)
    // console.log(response.data._id) // ticketId
    // setTicketId(response.data._id)
    setTicketId(2) // for now we assume 2
    console.log(formState)
    // clear the form
    setFormState(initialState)
    // remember as michael did in class, when we call axios.post and using something we get the whole object with his id then we pass the ticketId as Params.
    navigate(`ticket/${2}`)
  }

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
