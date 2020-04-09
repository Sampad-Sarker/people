import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import MainArea from './Components/MainArea/MainArea';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>

      <Header></Header>
      <MainArea></MainArea>
      <Footer></Footer>
      {/* <div className="header">
        <h1>Firends of Friends</h1>
      </div>
      <div className="navbar">

      </div> */}
    </div>
  );
}

export default App;
