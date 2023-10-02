import React, { useState } from 'react';
import './App.css';
import Alerts from './components/Alerts'
function App() {
  const [inputValue, setInputValue] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSendClick = () => {
    if (inputValue.trim() !== '') {
      setShowAlert(true);
    }
  };
  return (
    <div className="App">
    <input
        type="text"
        placeholder="Enter text..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSendClick}>Send</button>
      {showAlert && <Alerts />}
    </div>
  );
}

export default App;
