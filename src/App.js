import Map from './components/Map';
import Table from './components/Table';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Greeting from './components/Greeting';


function App() {

  return (

    <>
    <Router>
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
