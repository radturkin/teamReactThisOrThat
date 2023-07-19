import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroImage from './HeroImage'
import {object} from './object'

function App() {
  const [points, setPoints] = useState(object.points)
  
  console.log({object})
  return (
    <>
      <div>
        <HeroImage setPoints={setPoints} id={object[0].id} characterName={object[0].name} imageURL={object[0].image}/>
        <HeroImage setPoints={setPoints} id={object[1].id} characterName={object[1].name} imageURL={object[1].image}/>
        
      </div>
    </>
  )
}

export default App
