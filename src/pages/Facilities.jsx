import React from 'react'
import ImageCarousel from '../components/ImageCarousel'
import "../css/facilities.scss"
import f1 from "../assets/facilities/f1.png"
import f2 from "../assets/facilities/f2.png"
import f3 from "../assets/facilities/f3.png"
import f4 from "../assets/facilities/f4.png"
import f5 from "../assets/facilities/f5.png"
import f6 from "../assets/facilities/f6.png"
import f71 from "../assets/facilities/f71.png"
import f72 from "../assets/facilities/f72.png"
import f81 from "../assets/facilities/f81.png"
import f82 from "../assets/facilities/f82.png"
import f9 from "../assets/facilities/f9.png"
import f10 from "../assets/facilities/f10.png"
import f11 from "../assets/facilities/f11.png"
import f12 from "../assets/facilities/f12.png"
import f13 from "../assets/facilities/f13.png"
import f14 from "../assets/facilities/f14.png"

const Facilities = () => {

  const imagesfdm = [
   f71, f72
  ];

  const imagessla = [
    f81, f82
  ];


  return (
    <div className="container f-container">
      <h1>Facilities</h1>
    <div className="facilities">
      {/* row1 */}
      <div className="f-vertical">
        <img src={f1} alt="" />
        <h2>Ultrasonic-assisted grinding with an ultrasonically atomized cooling system</h2>
      </div>

      <div className="f-vertical">
        <img src={f2} alt="" />
        <h2>Abrasive flow machining (AFM)</h2>
      </div>

      <div className="f-vertical">
        <img src={f3} alt="" />
        <h2>Microwave sintering furnace</h2>
      </div>
       {/* row2 */}
      <div className="f-vertical">
        <img src={f4} alt="" />
        <h2>High temperature programmable tube furnace</h2>
      </div>

      <div className="f-vertical">
        <img src={f5} alt="" />
        <h2>Hot air oven</h2>
      </div>

      <div className="f-vertical">
        <img src={f6} alt="" />
        <h2>DAQ System</h2>
      </div>

      {/* row3 */}
      <div className="f-vertical">
        <ImageCarousel images={imagesfdm}/>
        <h2>Fused deposition modeling (FDM)</h2>
      </div>

      <div className="f-vertical">
      <ImageCarousel images={imagessla}/>
        <h2>Stereolithography (SLA) and Digital light processing (DLP) 3D printing</h2>
      </div>

      <div className="f-vertical">
        <img src={f9} alt="" />
        <h2>Tablet dissolution/ disintegration and friability test apparatus</h2>
      </div>

      {/* row4 */}
      <div className="f-horizontal">
        <img src={f10} alt="" />
        <h2>Filament extrextruder</h2>
      </div>


       {/* row5 */}
       <div className="f-vertical">
        <img src={f11} alt="" />
        <h2>Viscometer</h2>
      </div>

      <div className="f-vertical">
        <img src={f12} alt="" />
        <h2>Refrigerated centrifuge</h2>
      </div>

      <div className="f-vertical">
        <img src={f13} alt="" />
        <h2>Ultrasonic homogenizer</h2>
      </div>


       {/* row6 */}
       <div className="f-horizontal">
        <img src={f14} alt="" />
        <h2>DAQ System</h2>
      </div>



    </div>
    </div>
  )
}

export default Facilities