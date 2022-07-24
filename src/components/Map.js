import L  from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';
import Header from './Header';
import Navigator from './Navigator';
import Data from './axios';

const MapStyle = styled.div`

display: flex;
margin-top: 80px;
z-index: 3;

`
const InfoStyle = styled.div`

margin-top:100px;
font-size: large;

`

const BodyStyle = styled.div`

animation-name: mapTransition;
animation-duration: 4s;

@keyframes mapTransition {

  from {opacity: 0}
  to {opacity: 1 }

}
`


export default function Map() {

    const  IconImage = L.icon ({
      iconUrl: require('../assets/correct.png'),
      iconSize: 20,
    })

    return(
        <>
        <Header/>
        <BodyStyle>
        <InfoStyle>

        <h1>Map Page</h1>
        <p>This is the map page zoom out to see more of the plotted 
            companies. click on them to find out exactly what company 
            they are and information on them
        </p>
        
        </InfoStyle>
        
        <MapStyle>
        
        <MapContainer style={{height: '50vh', width: '100vw'}} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {Data().map(company => (
        <Marker key={company.id} position={[company.location.latitude, company.location.longitude]} icon={IconImage}>
          <Popup key={company.id}>
          Name: {company.company} <br /> 
          Sector: {company.sector} <br/>
          stockSymbol: {company.stockSymbol} <br/>
          Address: {company.address} <br/>
          Amount: {company.fees.amount} <br/>
          Currency: {company.fees.currency} <br/>
          Longitude: {company.location.longitude} <br/>
          Latitude: {company.location.latitude} <br/>
          </Popup>
        </Marker>
  ))}
        </MapContainer>
        </MapStyle>
        <Navigator/>
        </BodyStyle>
  
        </>
    )

}