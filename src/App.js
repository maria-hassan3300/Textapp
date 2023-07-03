import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar'
 import About from './Components/About';
 import TextForm from './Components/TextFom';
import Alert from './Components/Alert';
import { BrowserRouter as Router, Switch,Route, Routes,Link } from 'react-router-dom';


function App() {
   const [mode, setMode] =  useState('light');
    const [alert, setAlert]=  useState(null);
     const showAlert=(message, type)=>{
           setAlert({
            text: message,
            type: type
           })
            setTimeout(()=>{
                setAlert(null);
            }, 2000)
            
     }
   const togglemodefun=()=>{
      if (mode ==='light'){
         setMode('dark');
         document.body.style.backgroundColor = 'gray';
         showAlert('Dark mode has been Enabled', 'success')
      }
      else {
        setMode('light')
        document.body.style.backgroundColor = 'white';
        showAlert('light mode has been Enabled', 'danger')
      }
   }

  return (
    <Router>
       
      <Navbar title = "TextApp" changeMode = {mode} toggleMode= {togglemodefun}/>
     
        <Alert alert= {alert}/>
        <div className="container my-5"> 
        <Routes>
          <Route path="/about"element={<About />} />
        </Routes>
       
       <TextForm showAlert = {showAlert} tagline =" Enter Your Text Here And Analyze It"  changeMode = {mode}/>
         </div>
    </Router>
  );
}
 

export default App;

