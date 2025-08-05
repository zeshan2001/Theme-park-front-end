const SearchTicket = ({ onChange, onSubmit, value }) => {
  return (
    <>
        <form className="search-form" onSubmit={onSubmit}>
          <button type="submit" className="search-btn">Find</button>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Ticket ID..."
            onChange={onChange}
            value={value}
          />
        </form>
    </>
  )
}
export default SearchTicket
