import Main from './page/main';
import ANM from './page/ANM';
import LTW from './page/LTW';
import TKDH from './page/TKDH';
import CEH from './page/CEHweb';
import AWS from './page/AWSweb';
import NH from './page/NGANHHOC';
import Errorpage from './page/404page';
import DK from './page/DKweb';
import Header from './component/header';
import Footer from './component/footer';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import { Toggle } from './component/Toggle';
function App() {
  const [isDark, setIsDark] = useState(true)
  return (
    <div className='App' data-theme={isDark ? "dark" : "light"}>
      <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      <Header/>
      
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/NGANHHOC' element={<NH />} />
        <Route path='/ANM' element={<ANM />} />
        <Route path='/LTW' element={<LTW />} />
        <Route path='/TKDH' element={<TKDH />} />
        <Route path='/CEH' element={<CEH />} />
        <Route path='/AWS' element={<AWS />} />
        <Route path='/UNGTUYEN' element={<DK />} />
        <Route path='/*' element={<Errorpage />} />
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
