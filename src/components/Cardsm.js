import React from 'react'
import '../components/cardsm.css'
import space from "../images/Space.png"

function Cardsm(props) {
  return (
    <div>
    <div class="card-deck row">
  <div class="card col-lg-3 col-sm-12">
   
    <div class="card-body">
      <h5 class="card-title">Events</h5>
      <p class="card-text">August 2 - 4, 2022
Army Aviation Industry Day</p>
      <p class="card-text">August 26 - 29, 2022
National Guard Association of the United States
</p>
      <p class="card-text">September 6 - 9, 2022
Future Travel Experience Global</p>
      <p class="card-btn">view all event</p>
    </div>
  </div>
  <div class="card col-lg-3 col-sm-12 ">
   
    <div class="card-body">
      <h5 class="card-title">News Releases</h5>
      <p class="card-text">July 27, 2022
Collins Aerospace bringing next-generation life support system to NASA deep space habitation development </p>
      <p class="card-text">July 25, 2022
Collins Aerospace awarded Mission System for Air Launched Effects for U.S. Army Future Vertical Lift program </p>
      <p class="card-text">July 18, 2022
Collins Aerospace breaks ground on $14 million expansion of additive manufacturing center in West Des Moines, Iowa</p>
      <p class="card-btn">view all reason</p>
    </div>
    </div>
    <div class="card col-lg-3 col-sm-12">
   
    <div class="card-body">
      <h5 class="card-title">Featured Jobs</h5>
      <p class="card-text">Bengaluru, Karnataka, India
Principal Engineer</p>
      <p class="card-text">Beijing, Beijing, China
HR Partner</p>
      <p class="card-text">Windsor Locks, Connecticut, United States Of America
Quality Manager</p>
      <p class="card-btn">visit the carrersite</p>
    </div>
    </div>
    <div class="card col-lg-3 col-sm-12">
    
    <div class="card-body">
      <h5 class="card-title">Raytheon Technologies Policy</h5>
      <p class="card-text">Partnering with 
<a href='www.google.com'>@NASAArtemis,@CollinsAero</a>
space suits are shaping the next generation of space exploration. Learn more about our intelligent space technologies essential for global commerce, scientific discovery and national security: <a href='www.google.com'>raytheontech.co/3oB3U4g</a></p>
<img src={space} class="card-img-top" alt="..."/>
     
      <p class="card-btn"></p>
    </div>
    </div>
    
  </div>
</div>


      
    
  )
}

export default Cardsm;
