import './App.css';
import { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] =useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    

    setTimeout(()=>{
      setAlert(null);
    },1000)
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042149';
      document.body.style.color='white';
      showAlert("Dark Mode has been enabled","success")
    }else{
      setMode('light')
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("light Mode has been enabled","success")
    }
  }
  return (
    <>

    <Router>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Routes>
      <Route exact path="/" element={<TextForm showAlert={showAlert} mode={mode} heading={"Enter the Text to analyze below"} />}/>
      <Route exact path="/about" element={<About  mode={mode} />}/>
      </Routes>

    </Router>
     

    </>
  );
}

export default App;
