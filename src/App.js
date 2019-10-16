import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = ()=>{
  const APP_ID = '0cdd289d'
  const APP_KEY = 'b84de0c2f9184cc17cac7ee36e5235a6'
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_KEY}&app_key=${APP_KEY}`
  return (
    <div className="App">
        <h1>hello react</h1>
    </div>
  )
}

export default App;
