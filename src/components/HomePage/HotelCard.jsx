
const HotelCard = ({hotel}) => {
  return (
    <div>
      <header>
        <img src={hotel.images[0].url} alt="" />
      </header>
      <h3>{hotel.name}</h3>
      <div>{hotel.rating}</div>
      <div>{hotel.city.name}, {hotel.city.country}</div>
      <div>{hotel.price}</div>
      <button>See more...</button>
    </div>
  )
}

export default HotelCard