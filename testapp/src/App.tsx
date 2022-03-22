import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState<any>(null)
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
  },[]);
  const getDataFromAPI = async() => {
  const response = await( await fetch(`/api/message`)).json();
  setMessage(response)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <div>{message}</div>
        <button onClick={()=>window.alert('test')}>test</button>
        <button onClick={()=>getUserInfo()}>fetch</button>
        <button onClick={()=>getDataFromAPI()}>message</button>
        <a href="/.auth/login/aad">Login</a>
      </header>
    </div>
  );
}

export default App;
