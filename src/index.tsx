




import React from 'react';
import ReactDOM from 'react-dom/client';
import Weather from './pages/weather';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NewYork from './pages/newyork';
import London from './pages/london';
import Portland from './pages/portland';
import Paris from './pages/paris';
import Toronto from './pages/toronto';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);





const App:React.FC = () => {

 
    return (
      <>
      <Router>
        <Routes>
          <Route path='/' element={<Weather />}/>
          <Route path='/newyork' element={<NewYork />}/>
          <Route path='/london' element={<London />}/>
          <Route path='/portland' element={<Portland />}/>
          <Route path='/paris' element={<Paris />}/>
          <Route path='/toronto' element={<Toronto />}/>

        </Routes>
      </Router>
      </>
    )
}
root.render(
    <App />
  
);
