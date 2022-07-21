import './App.css';
import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

const dataUrl = "https://run.mocky.io/v3/7cb595ed-2882-4dc7-8179-d38d0b9c9d13";

function App() {

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


  return (
    <>
    {companyData === undefined ? 
    <Spinner animation='border'/>
    :
    <Table>
      <thead>
        <tr>
          <th>id</th>
          <th>company</th>
          <th>sector</th>
          <th>stockSymbol</th>
          <th>address</th>
          <th>amount</th>
          <th>currency</th>
          <th>latitude</th>
          <th>longitude</th>
        </tr>
      </thead>
      <tbody>
        
      {companyData.map(company => (
        <tr>
        <td>{company.id}</td>
        <td>{company.company}</td>
        <td>{company.sector}</td>
        <td>{company.stockSymbol}</td>
        <td>{company.address}</td>
        <td>{company.fees.amount}</td>
        <td>{company.fees.currency}</td>
        <td>{company.location.latitude}</td>
        <td>{company.location.longitude}</td>
        </tr>
      ))}
      
      </tbody>
    </Table>
}
    </>
  );
}

export default App;
