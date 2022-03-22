import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const getUserInfo = async() => {
    window.alert('getUserInfo');
    const response = await fetch('/.auth/me');
    const payload = await response.json();
    const { clientPrincipal } = payload;
    window.alert(`clientPrincipal: ${JSON.stringify(clientPrincipal)}`);
    return clientPrincipal;
  }
  useEffect(()=> {
    getUserInfo()
  },[])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={()=>window.alert('test')}>test</button>
        <button onClick={()=>getUserInfo()}>fetch</button>
        <a href="/.auth/login/aad">Login</a>
      </header>
    </div>
  );
}

export default App;
