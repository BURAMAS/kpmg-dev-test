import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter, numberFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css'
import Header from './Header';
import Navigator from './Navigator';

const dataUrl = "https://run.mocky.io/v3/7cb595ed-2882-4dc7-8179-d38d0b9c9d13";

export default function Table() {

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
return(
    <>
    <Header/>
      <BootstrapTable  
      keyField='id' 
      columns={columns} 
      data={companyData}
      pagination={pagination}
      filter= {filterFactory()}/>
      <Navigator/>
      </>

)
    

}