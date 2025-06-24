import './App.css';
import Navbar from './components/Navbar.tsx';
import Textform from './components/Textform.js';
import React,{useState} from 'react'
import Alert from './components/Alert.js'
import About from './components/About.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {

  const [alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
    setAlert({
    msg: message,
    type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }

  const [mode,setMode]=useState('light');
  const [modetxt,setModeTxt]=useState("Dark Mode");

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      setModeTxt("Light Mode")
      showAlert("Dark mode has been enabled","success")
      document.body.style.backgroundColor=' #121212'
      
    }
    else{
      setMode('light')
      setModeTxt("Dark Mode")
      showAlert("Light mode has been enabled","success")
      document.body.style.backgroundColor='white'
    }
  }


  return (
    <>
    <Router>
     <Navbar title="Title" mode={mode} toggleMode={toggleMode} txt={modetxt} />
     <Alert alert={alert} />
     <div className="container mb-3">
      <Routes>
        <Route exact path="/about" element={<About/>}>
        </Route>
        <Route exact path="/" element={<Textform heading="Enter Text below" mode={mode}/>}>
        </Route>
      </Routes>
     </div>
    </Router>
    </>
  );
}

export default App;
