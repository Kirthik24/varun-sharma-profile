import React from 'react'
import pdf1 from "../../assets/people/pdf1.png"
import "../../css/people/people.scss"

const PeoplePostDocFellow = () => {
  return (
    <div className="container">
        <h1>Postdoc Fellows</h1>
        <div className="peoplelist">
            <div className="person">
            <img src={pdf1} alt="" />
            <div className="details">
                   <h2>Kunal Arora</h2>
                   <p>Topic - Additive manufacturing</p>
                   <p>Year - April 2023- present</p>
                   <p>Status - On-going</p>
                   <p>Supervisor - <b>Prof. Varun Sharma</b></p>
                   <br />
                   <br />
                   <br />
                   <br />
                   <br />
                   <br />
                   <p>Email - <a href="mailto: kunalarora1108@gmail.com">kunalarora1108@gmail.com</a></p> 
                   <p>Contact No. - +91-8847084375</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default PeoplePostDocFellow
