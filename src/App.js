import React from 'react'
// Routing
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'

// Component
import Header from './components/Header/Header.component'
import Home from './components/Home.component'
import Movie from './components/Movie'
import NotFound from './components/NotFound'

// Styles
import { GlobalStyle } from './GlobalStyle'

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:movieId' element={<Movie />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
    <GlobalStyle />
  </Router>
)

export default App
