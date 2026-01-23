import React from 'react'
import Cards from './components/Cards.jsx'
import Filters from './components/Filters.jsx'

const App = () => {
  return (
    <div className="bg-blue-50">
      <h1 className="font-bold text-3xl bg-gradient-to-r from-purple-300 via-purple-500 to-purple-300 text-white p-5 text-center">SHOPPING APP</h1>
      <div className="flex">
        <Filters />
        <Cards />
      </div>
    </div>
  )
}

export default App
