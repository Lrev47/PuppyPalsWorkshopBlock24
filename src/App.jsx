import React, { useState } from 'react'
import './App.css'
import { puppyList } from './data.js'

function App() {
  
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null)
  console.log("Puppy List:", puppies)

  return (
      <div className="App">
        {puppies.map((puppy) =>(
            <p onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
        ))}
          { featPupId && <p>{ featPupId }</p> } 
      </div>
  );
}

export default App;