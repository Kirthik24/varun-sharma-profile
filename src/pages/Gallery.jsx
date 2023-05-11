import React from 'react'
import '../css/gallery.scss'
import { g1,g2,g3 } from '../assets/gallery'

const Gallery = () => {
  return (
   <div className="gcontainer">
     <img src={g1} alt="" />
     <img src={g2} alt="" />
     <img src={g3} alt="" />
   </div>
  )
}

export default Gallery


{/* <div className="gcontainer">
<div className="gallery">
    <h3>Gallery</h3>
    <div className="row">
        <div className="square"></div>
        <div className="rectangle"></div>
        <div className="square"></div>
    </div>

    <div className="row">
        <div className="fullrectangle"></div>
    </div>

    <div className="row">
        <div className="square"></div>
        <div className="rectangle"></div>
        <div className="square"></div>
    </div>
</div>
</div> */}