import L, { icon } from 'leaflet';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import { useEffect, useState} from 'react';

import styled from 'styled-components';
import Header from './Header';
import Navigator from './Navigator';

const MapStyle = styled.div`
display: flex;
margin-top: 80px;
z-index: 3;

`
const InfoStyle = styled.div`
margin-top:100px;
font-size: large;
`
const dataUrl = "https://run.mocky.io/v3/7cb595ed-2882-4dc7-8179-d38d0b9c9d13";


export default function Map() {

    const  [companyData, setCompanyData] = useState([]);

    useEffect(() => {
        axios
        .get(dataUrl)
        .then(res => {
          console.log(res);
          setCompanyData(res.data)
        })
        .catch(err => {
          console.log(err)
        });
      }, [])
      

  
    const  IconImage = L.icon ({
      iconUrl: require('../assets/correct.png'),
      iconSize: 20,
    })

    return(
        <>
        <Header/>
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
  {companyData.map(company => (
  <Marker position={[company.location.latitude, company.location.longitude]} icon={IconImage}>
    <Popup>
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
  
  </>
    )

}