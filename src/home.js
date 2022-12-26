import Logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom/client';

const home=()=>{
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <div className="App">
     <header className="App-header">
        <img src={Logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
         className="App-link"
         href="https://reactjs.org"
         target="_blank"
         rel="noopener noreferrer"
       >
           Learn React
        </a>
       </header> 
</div>
      </React.StrictMode>
    );
};
export default home;