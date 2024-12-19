import React from 'react'

const CapitlasArray=[
    "Delhi",
    "Mumbai",
    "Panaji",
    "Kolkata",
    "Chennai",
    "Patana"
]

export default function CapitalsData({onSelectCapital}) {

  const getRandomCapital = () =>{
    const randomIndex = Math.floor(Math.random() * CapitlasArray.length);
    return CapitlasArray[randomIndex];
  }
  const handleCapital = ()=>{
    const capital=getRandomCapital();
    //console.log(CapitlasArray[1]);
    //console.log(capital);
    onSelectCapital(capital)
  }  
  return (
    <div>
      <button onClick={handleCapital}>Click for Random Capital</button>
    </div>
  )
}
