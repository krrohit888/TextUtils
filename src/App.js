import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#211f3a'
      showAlert("Dark mode has been Enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been Enabled", "success");
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes>
            <Route path="/about" element={<About />} /> */}

            {/* <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyse" mode={mode} />} /> */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyse" mode={mode} />
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>

  );
}

export default App;
