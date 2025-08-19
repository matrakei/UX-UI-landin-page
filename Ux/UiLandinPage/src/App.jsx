import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Footer  from './components/Footer/Footer';
import  Header  from './components/Header/Header';
import  Section  from './components/Section/Section';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Section />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
} 

export default App
