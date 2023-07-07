import React from 'react'
import "../components/articleimg.css";
import flight from '../images/flight.png'
import research from '../images/research.png'
import forest from '../images/forest.png'
function Articleimg() {
  return (
    
<>
<div className="card-img-section">
  <div className="card-image">
    <img src={flight} className="card-img-top" alt="..."/>
   
  </div>
  <div className="card-image">
    <img src={research} className="card-img-top" alt="..."/>
    
  </div>
  <div className="card-image">
    <img src={forest} className="card-img-top" alt="..."/>
   
  </div>
</div>
</>
    
  )
}

export default Articleimg;

