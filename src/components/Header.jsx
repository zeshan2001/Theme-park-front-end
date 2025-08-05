import { NavLink } from 'react-router-dom'

const Header = ({ ticketId }) => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/rides">Rides</NavLink>
          <NavLink to={`/ticket/${ticketId}`}>Track Ticket</NavLink>
        </nav>
      </header>
    </>
  )
}
export default Header
