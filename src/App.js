import React from 'react';
import './App.css';
import Jumbotron from './components/Jumbotron';
import MarvelSection from './components/MarvelSection';
import DcSection from './components/DcSection';

export default function App() {

  return (
    <div className='container'>
      <Jumbotron />
      <MarvelSection />
      <DcSection />
    </div>
  )
}
