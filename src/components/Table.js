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

import styled from 'styled-components';

const TableStyle = styled.div`
//margin-top: 100px;
font-size: large;


@media only screen and (max-width: 768px) {

    display: flex;
    flex-direction: column;
    font-size: large;
    

    .table{
        //margin-top: 100px;
        //margin-left: -8px;
        font-size: 7.5px;
        width: 100vw;
        display: flex;
        flex-direction: column;
        //align-items: center;
        //justify-content: center;

        
    }
}
`

const InfoStyle = styled.div`
margin-top: 100px;
`

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
        { dataField:'sector', text: 'Company Sector', filter: textFilter({
            style: {display: 'flex', flexDirection: 'column', width: '60px' , paddingTop: '10px'}
        }) },
        { dataField:'stockSymbol', text: 'Stock Symbol' },
        { dataField:'address', text: 'Company Address'},
        { dataField:'fees.amount', text: 'Amount', filter: numberFilter({
          style: {display: 'flex', flexDirection: 'column', width: '150px' , marginBottom: '10px', justifyContent: 'center', alignItems: 'center'},
    })},
        { dataField:'fees.currency', text: 'Currency' },
        { dataField:'location.latitude', text: 'Latitude' },
        { dataField:'location.longitude', text: 'Longitude' },
      ]
    
    
    
      const pagination = paginationFactory({
        page: 1,
        sizePerPage: 50,
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
    <InfoStyle>
    <h1>Table Page</h1>
    <p>This is the table page with all the information read
        you can filter by the amount and Sector. ensure you choose
        the comparator so that it is filtered correctly
    </p>
    </InfoStyle>
    <TableStyle>
      <BootstrapTable
      parentClassName={'table'}
      keyField='id' 
      columns={columns} 
      data={companyData}
      pagination={pagination}
      filter= {filterFactory()}/>
      </TableStyle>
      <Navigator/>
      </>

)
    

}