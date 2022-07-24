import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter, numberFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css'
import Header from './Header';
import Navigator from './Navigator';
import styled from 'styled-components';
import Data from './axios';

const TableStyle = styled.div`

font-size: 8px;

.head{

  input{
        margin-top: 20px;
        font-size: x-small;
        min-width: 70px ;
        height: 45px ;
  }

  th{
    
        width: 100%;
        color: white;
        background-color: #4287f5;
        text-align: center;

      }
      
    }
    
    .body{

      background-color: aliceblue;
      width: 100%;

    td{
        text-align: left;
      }

    tr{
        background-color: aliceblue;
    }

    }


@media only screen and (max-width: 767px) {

    display: flex;
    flex-direction: column;
    font-size: large;
    
    .head{

        display: flex;
      
      input{

        font-size: x-small;
        min-width: 60px ;
        height: 25px ;
        
      }

      th{
        width: 100%;
        color: white;
        background-color: #4287f5;
      }

    }
    
    .body{
      background-color: aliceblue;
      width: 100%;

    td{

      text-align: left;

      }

    tr{

      background-color: aliceblue;

    }

    }

    .table{

        font-size: 8.5px;
        display: flex;
        flex-direction: column;

    }
  }

`

const InfoStyle = styled.div`

margin-top: 100px;

`

const TableAnimation = styled.div`

animation-name: pulse;
animation-duration: 4s;

@keyframes pulse {
  0% {opacity: 0}
  25% {opacity: 1 }
  50% {opacity: 0}
  75% {opacity: 0.5}
  100%{opacity: 1}
}

  
`;


export default function Table() {



      const columns = [ 
        { dataField:'id', text: 'Id' , },
        { dataField:'company', text: 'Company' },
        { dataField:'sector', text: 'Sector', filter: textFilter({
            style: {display: 'flex', flexDirection: 'column',  }
        }) },
        { dataField:'stockSymbol', text: 'Stock Symbol', },
        { dataField:'address', text: 'Address'},
        { dataField:'fees.amount', text: 'Amount',filter: numberFilter({
          style: {display: 'flex', flexDirection: 'column', },
    })},
        { dataField:'fees.currency', text: 'Currency' , style:{ paddingLeft: '30px'}},
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
    <TableAnimation>
      <TableStyle>
        <BootstrapTable
        parentClassName={'table'}
        keyField='id' 
        headerClasses='head'
        columns={columns}
        bodyClasses='body'
        data={Data()}
        pagination={pagination}
        filter= {filterFactory()}/>
      </TableStyle>
      <Navigator/>
    </TableAnimation>
      </>

)
    

}