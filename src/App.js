
import Map from './components/Map';
import Table from './components/Table';
import Header from './components/Header';


import styled from 'styled-components';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Greeting from './components/Greeting';

const Container = styled.div`
display: flex;
`

function App() {

  return (

    <>
    <Router>
    {/*<Header/>*/}
    <Routes>
      <Route path='/' element={<Greeting/>}/>
      <Route path='/map' element={<Map/>}/>
      <Route path='/table' element={<Table/>}/>
    </Routes>
    </Router>
  </>

  
  )
}

export default App;
