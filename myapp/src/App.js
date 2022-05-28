import React from 'react';
import './App.css';
import Myapp from  './components/Myapp';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {
    return (
        <div className='main-div'>
            <Header/>
            <Myapp/>
            <Footer/>   
        </div>
    );
}

export default App;