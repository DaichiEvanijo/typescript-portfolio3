import { APIProvider, Map, AdvancedMarker, Pin } from "@vis.gl/react-google-maps";

const apiKey= import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';
const mapId = import.meta.env.VITE_PUBLIC_MAPS_ID || "";

const mapSize ={
  width:"100%",
  height:"400px"
}

const position ={
  lat:51.223700,
  lng:6.792820
}

const GoogleMapComponent = () => {
  
  return (
    <APIProvider apiKey={apiKey}>
      <div style={mapSize}>
        <Map defaultZoom={15} defaultCenter={position} mapId={mapId} >
          {/* marker, pinなどを入れたいならMapコンポのmapIdは必須 */}
          <AdvancedMarker
            position={position}
            title={'AdvancedMarker with customized pin.'}>
            <Pin
              background={'#d30808'}
              borderColor={'#d30808'}
              glyphColor={'grey'}></Pin>
          </AdvancedMarker>
        </Map>
      </div>

    </APIProvider>
  )
}

export default GoogleMapComponent