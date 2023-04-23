import React from 'react'
import '../../css/publications/bookchapters.scss'

const BookChapters = () => {
  return (
    <div className="container">
    <div className="bookchapters">
        <h1>Book chapters</h1>
        <div className="chapters">
            <div className="singlechapter">
                <div className="coverimg"></div>
                <div className="details">
                    <p>
                    Kumar Mohit, Choudhary Neha, and <b>Varun Sharma</b>. “Additive manufacturing of polymer based
                    functionally graded materials”. In Additive Manufacturing Advanced Materials and Design Techniques.
                    pp 167-185. CRC Press.
                    </p>
                </div>
            </div>

            <div className="singlechapter">
                <div className="coverimg"></div>
                <div className="details">
                    <p>
                    Sharma, Kshitij, Maitrik Shah, Shivendru Mathur, Neha Choudhary, and <b>Varun Sharma</b>. “Impact of
Enabling Factors on the Adoption of Additive Manufacturing in the Automotive Industry.” In Additive
and Subtractive Manufacturing Processes, pp. 211-240. CRC Press, 2022.
                    </p>
                </div>
            </div>

            <div className="singlechapter">
                <div className="coverimg"></div>
                <div className="details">
                    <p>
                    Singh, Ramandeep, and <b>Varun Sharma</b>. “Recent Trends of Cutting Fluids and Lubrication Techniques
in Machining.” In Advanced Manufacturing Processes, pp. 1-28. CRC Press.
                    </p>
                </div>
            </div>

            <div className="singlechapter">
                <div className="coverimg"></div>
                <div className="details">
                    <p>
                    <b>Varun Sharma</b>, Pulak Mohan Pandey, Anish Roy, Uday S. Study of Surface Integrity in Conventional
and Ultrasonic Assisted Turning with Self-lubricating Cutting Inserts. Precision Product-Process Design
and Optimization- Select Papers from AIMTDR 2016” (editors: S.S. Pande and U.S. Dixit) published by
Springer.
                    </p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default BookChapters