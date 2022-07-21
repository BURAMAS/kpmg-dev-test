import './App.css';
import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import axios from 'axios'

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
    <ul>
      {companyData.map(company => (
        <li key={company.id}>{company.company}</li>
      ))}
    </ul>
}
    </>
  );
}

export default App;
