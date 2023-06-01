import React from 'react'
import mtech1 from "../../assets/people/mtech1.png"
import "../../css/people/people.scss"

const PeopleAlumini = () => {
    return (
        <div className="container">
            <h1>Alumni</h1>
            <div className="peoplelist">
            <div className="person">
                <img src={mtech1} alt="" />
                    <div className="details">
                    <span>
                        <h2>Nitin Dixit</h2>
                        <p>Degree - Ph.D.</p>
                        <p>Year - 2022</p>
                        <p>Current Position -  Assistant Professor (Contractual) Department of Mechanical Engineering, Punjab Engineering College (Deemed to be University) Sector12, Chandigarh 160012</p>
                    </span>
                        <span> <p>Email - <a href="mailto: ndixit111@gmail.com"><span>ndixit111@gmail.com</span></a></p> 
                        <p>Contact No. - +91-9205607967</p></span>
                    </div>
            </div>
            </div>
        </div>
      )
}

export default PeopleAlumini