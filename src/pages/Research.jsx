import React from "react"
import '../css/research/research.scss'
import '../css/ulist.scss'

function Research() {
    return (
        <div className="container">
            <div className="research">
                <div className="para">
                    <div className="heading">
                    <h2>Area of Research</h2>
                    </div>
                    <div className="points">
                        <ul>
                        <li><span>Conventional machining</span></li>
                        <li><span>Non-conventional machining</span></li>
                        <li><span>Additive manufacturing</span></li>
                        <li><span>Additive manufacturing in biomedical application</span></li>
                        <li><span>Ultrasonic assisted machining</span></li>
                        <li><span>Sustainable machining</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      );
  
  
}

export default Research