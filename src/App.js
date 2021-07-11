import React from 'react'

// Component
import Header from './components/Header/Header.component'
import Home from './components/Home.component'

// Styles
import { GlobalStyle } from './GlobalStyle'

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Header />
      <Home />
    </div>
  )
}

export default App
