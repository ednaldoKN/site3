import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Mint from './components/Mint.jsx'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route  path='/' element={<App />}/>
          <Route path='/mint' element={<Mint/>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
