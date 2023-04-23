import React from 'react'
import '../css/gallery.scss'
const Gallery = () => {
  return (
    <div className="container">
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
    </div>
  )
}

export default Gallery