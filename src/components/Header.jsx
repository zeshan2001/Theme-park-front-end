import { NavLink } from 'react-router-dom'

const Header = ({ ticketId }) => {
  return (
    <>
      <header>
        <nav>
          {/* / */}
          <NavLink to="/">Home</NavLink>
          {/* /rides */}
          <NavLink to="/rides">Rides</NavLink>
          {/* /ticket/:ticketId */}
          <NavLink to={`/ticket/${ticketId}`}>Track Ticket</NavLink>
        </nav>
      </header>
    </>
  )
}
export default Header
