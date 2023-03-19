
import Navbar from './Navbar';
import TextForm from './TextForm';
import About from './About';
import Alert from './Alert';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'TextUtile-Dark mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = 'TextUtile-Light mode';
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container my-3'>
          <Routes>
            <Route exact path='/' element={<TextForm showAlert={showAlert} heading='Enter your text' mode={mode} />} />
            <Route exact path='/about' element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}