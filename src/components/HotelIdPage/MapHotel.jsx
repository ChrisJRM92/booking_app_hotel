import { Map, Marker } from "pigeon-maps"

const MapHotel = ({lat, long}) => {
  return (
    <Map center={[+lat, +long]} width={300} height={250}>
      <Marker
        width={50}
        anchor={[+lat, +long]}
        color="#555bcc"
      />
    </Map>
  )
}

export default MapHotel