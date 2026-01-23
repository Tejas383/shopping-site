import React, {useState} from 'react'
import Cards from './components/Cards.jsx'
import Filters from './components/Filters.jsx'

const App = () => {
  const [cols, setCols] = useState(3);

  return (
    <div className="bg-blue-50">
      <h1 className="font-bold text-3xl bg-gradient-to-r from-purple-300 via-purple-500 to-purple-300 text-white p-5 text-center">SHOPPING APP</h1>
      <div className="flex">
        <Filters cols={cols} setCols={setCols} />
        <Cards cols={cols} />
      </div>
    </div>
  )
}

export default App
