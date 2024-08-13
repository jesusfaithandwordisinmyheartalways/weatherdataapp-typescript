




import React from 'react';
import ReactDOM from 'react-dom/client';
import Weather from './pages/weather';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);





const App:React.FC = () => {
    return (
      <>
      <Weather />
      </>
    )
}
root.render(
    <App />
  
);
