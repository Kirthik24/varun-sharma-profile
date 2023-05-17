import React from 'react'
import mtech1 from "../../assets/people/mtech1.png"
import mtech2 from "../../assets/people/mtech2.png"
import mtech3 from "../../assets/people/mtech3.png"
import mtech4 from "../../assets/people/mtech4.png"
import "../../css/people/people.scss"

const PeopleMtech = () => {
  return (
    <div className="container">
        <h1>M. Tech.</h1>
        <div className="peoplelist">
        <div className="person">
            <img src={mtech1} alt="" />
                <div className="details">
                    <h2>Neetesh Kumar Sah</h2>
                    <p>Topic - Conventional machining</p>
                    <p>Year - July 2018- June 2020</p>
                    <p>Status - Awarded</p>
                    <p>Supervisor - <b>Prof. Varun Sharma</b></p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <p>Email - <a href="mailto: neeteshkumar4109@gmail.com"><span>neeteshkumar4109@gmail.com</span></a></p> 
                    <p>Contact No. - +91-9523054117</p>
                </div>
        </div>

        <div className="person">
            <img src={mtech2} alt="" />
                <div className="details">
                    <h2>Shubham Shankar Mohol</h2>
                    <p>Topic - Biomedical applications of 3D printing</p>
                    <p>Year - July 2019- June 2021</p>
                    <p>Status - Awarded</p>
                    <p>Supervisor - <b>Prof. Varun Sharma</b></p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <p>Email - <a href="mailto: shubham.mohol93@gmail.com"><span>shubham.mohol93@gmail.com</span></a></p> 
                    <p>Contact No. - +91-9730474081</p>
                </div>
        </div>

        <div className="person">
            <img src={mtech3} alt="" />
                <div className="details">
                    <h2>Muniram Meena</h2>
                    <p>Topic - Non-conventional machining</p>
                    <p>Year - July 2020- June 2022</p>
                    <p>Status - Awarded</p>
                    <p>Supervisor - <b>Prof. Varun Sharma</b></p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <p>Email - <a href="mailto: m_meena@me.iitr.ac.in"><span>m_meena@me.iitr.ac.in</span></a></p> 
                    <p>Contact No. - +91-7891781033</p>
                </div>
        </div>


        <div className="person">
            <img src={mtech4} alt="" />
                <div className="details">
                    <h2>S A Surendar</h2>
                    <p>Topic - Auxetic structures for impact applications</p>
                    <p>Year - June 2022 - May 2023</p>
                    <p>Status - On going</p>
                    <p>Supervisor - <b>Prof. Varun Sharma</b></p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <p>Email - <a href="mailto: surenmechanic@gmail.com"><span>surenmechanic@gmail.com</span></a></p> 
                    <p>Contact No. - +91-8526143224</p>
                </div>
        </div>

        </div>
    </div>
  )
}

export default PeopleMtech