import './App.css';
import About from './components/About';
import Form from './components/Form';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Alert from './components/Alert';
import { RegForm } from './components/RegForm';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"


function App() {
  const [alert, setAlert] = useState(null);
  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
   
  
  const [mode, setMode] = useState('light')
  
  
  const changeyellow = ()=>{
    showAlert("yellow Mode has been Enabled","success");
    document.body.style.backgroundColor = '#CAB911';
  
  }
  
  const changegreen = ()=>{
     
    showAlert("green Mode has been Enabled","success");
  document.body.style.backgroundColor = 'green';
}

  const changered = ()=>{
    
    document.body.style.backgroundColor = '#C15031'
  
  }
  const toggleMode=()=>{
    if (mode === 'light') {
      setMode('dark');
      
      document.body.style.backgroundColor = 'black';
      showAlert("Black Mode has been Enabled","success");
      document.title = 'eLearning - Dark Mode';
    
      

    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled","success");
      document.title = 'eLearning - Light Mode';
    }
  }
  return (
    <>
     <Navbar id="Navbar" title="eLearning" changegreen={changegreen} changered={changered} changeyellow={changeyellow}  aboutus="About" mode={mode} toggleMode={toggleMode} />   
    
    <Alert alert={alert}/>
    {/*
    <div className='container'>
    <Form message="Send Query" showAlert={showAlert} />
     
    </div>
    <About/>  */}
     
    <div className="container">
       
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />

        <Route path="/regform" element={<RegForm showAlert={showAlert} mode= {mode} />} />
        <Route path="/" element={<Form showAlert={showAlert} titleoftext="ENTER TEXT FOR ANALYSIS!" mode = {mode} />} />
      </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
