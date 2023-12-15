import React, { useState } from 'react'
import './App.css'
import { puppyList } from './data.js'

function App() {
  
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null)
  console.log("Puppy List:", puppies)
  const featuredPup = puppies.find((pup) => pup.id === featPupId)
  console.log(featuredPup)

  return (<div>
    <div id="headerBanner">
      </div>
      <h1>Puppy Pals!</h1>
    <div id="verticalView">
      <div className="App">
        {puppies.map((puppy) => (
          <p onClick={() => setFeatPupId(puppy.id)} key={puppy.id}>{puppy.name}</p>
        ))}
      </div>
      {featPupId && (
        <div className="pupCard">
          <h2>{featuredPup ? featuredPup.name : ''}</h2>
          <ul>
            <li>Age: {featuredPup ? featuredPup.age : ''}</li>
            <li>Email: {featuredPup ? featuredPup.email : ''}</li>
          </ul>
        </div>
      )}
    </div>
    </div>
  );
}

export default App;
