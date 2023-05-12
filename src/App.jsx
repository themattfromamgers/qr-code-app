import React, { useState } from 'react';
import QRCode from 'qrcode.react';

function App() {
  const [input, setInput] = useState('');

  const inputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <QRCode
        value={input}
        renderAs="img"
        level="H"
        size={256}
        includeMargin={true}
      />
      <br />
      <input type="text" value={input} onChange={inputChange} />
      <br />
    </div>
  );
}

export default App;
