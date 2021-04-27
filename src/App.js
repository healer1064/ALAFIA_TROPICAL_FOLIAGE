import React from 'react'
import { Global } from './styles/global'

import "fontsource-open-sans"
import Header from './components/Header'
import Homepage from './pages/Homepage'

function App() {
  return (
    <div className="App">
      <Global />
      <Header />
      <div className="main">
        <Homepage />
      </div>
    </div>
  );
}

export default App;
