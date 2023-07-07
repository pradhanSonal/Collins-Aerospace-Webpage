import image3 from '../images/Rectangle.png'
import cardimage from '../images/aeroplane.png'
import cardimage1 from '../images/grpaeroplane.png'
import '../components/Body.css'
import Article from './Article'; 
import Cardsm from './Cardsm';
import Cardbg from './Cardbg';
import Articleimg from './Articleimg';
function Body(){
    return(
        <div className='main-card'>
        <div className='card'>
<img className='card-bg' src={image3} alt='boy'></img>
<div className='card-description'>
    <h4>Perspective Changes Everything</h4>
    <h6>Sustainability at Collins Aerospace</h6>
    <p>Learn more</p>
</div>
  </div>
  <div className='main-article'>
<Article title="Future Vertical Lift" text="Putting innovation and expertise to work for the future of military rotorcraft." img={cardimage} ></Article>
<Article title="Collins Aerospace For Defense" text="Helping to make the modern warfighter safer, more connected and more effective than ever." img={cardimage1}></Article>
  </div>
  <div className='sm-card'>
    <Cardsm></Cardsm>
  </div>
  <div className='bg-card'>
<Cardbg></Cardbg>
  </div>
 <Articleimg></Articleimg>
  </div>

       
    )
}
export default Body;