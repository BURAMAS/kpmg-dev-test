import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter, numberFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css'

import L, { icon } from 'leaflet';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

const dataUrl = "https://run.mocky.io/v3/7cb595ed-2882-4dc7-8179-d38d0b9c9d13";



function App() {

  const  [companyData, setCompanyData] = useState([]);
  
  const  IconImage = L.icon ({
    iconUrl: require('./assets/icon.png'),
    iconSize: 30,
  })


  const columns = [
    { dataField:'id', text: 'Id' },
    { dataField:'company', text: 'Company Name' },
    { dataField:'sector', text: 'Company Sector', filter: textFilter() },
    { dataField:'stockSymbol', text: 'Stock Symbol' },
    { dataField:'address', text: 'Company Address'},
    { dataField:'fees.amount', text: 'Amount', filter: numberFilter({
      style: {display: 'inline-grid'},
})},
    { dataField:'fees.currency', text: 'Currency' },
    { dataField:'location.latitude', text: 'Latitude' },
    { dataField:'location.longitude', text: 'Longitude' },
  ]



  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 5,
    lastPageText: '>>',
    firstPageText: '<<',
    nextPageText: '>',
    prePageText: '<',
    showTotal: true,
    alwaysShowAllBtns: true,
    
  })



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


  return (
    <>
    {companyData === undefined ?
    <Spinner animation='border'/>
    :
    <>
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

  )
    <BootstrapTable  
    keyField='id' 
    columns={columns} 
    data={companyData}
    pagination={pagination}
    filter= {filterFactory()}/>
  </>
}
    </>
  );
}

export default App;
