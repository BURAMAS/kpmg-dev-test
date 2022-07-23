import { useEffect, useState } from 'react';
import axios from 'axios';

const dataUrl = "https://run.mocky.io/v3/7cb595ed-2882-4dc7-8179-d38d0b9c9d13";

export default function Data()  {
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

  return(
    companyData
  )
}