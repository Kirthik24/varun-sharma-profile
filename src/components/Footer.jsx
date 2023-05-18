import React from 'react'
import '../css/footer.scss'
import linkedin from "../assets/footer/linkedin.png"
import instagram from "../assets/footer/instagram.png"
import twitter from "../assets/footer/twitter.png"
import email from "../assets/footer/email.png"
import youtube from "../assets/footer/youtube.png"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footercontent">
          <h2>Lab Address</h2>
        <div className="socialconnect">
          <h2>Social Connect</h2>
          <div className="icons">
            <img className= "linkedin-img icon-item"src={linkedin} alt="" />
            <img className= "icon-item" src={email} alt="" />
            <img className= "icon-item"src={twitter} alt="" />
            <img className= "icon-item"src={instagram} alt="" />
            <img className= "icon-item"src={youtube} alt="" />
          </div>
        </div>
        <form action="">
            <h3>Interested students may contact:</h3>
            <label htmlFor="name">Name(Required)</label> <br />
            <input type="text" name='name' required={true}/>
            <br />
            <label htmlFor="email">Email(Required)</label> <br />
            <input type="email" name='email' required={true}/>
            <br />
            <label htmlFor="yourcv">Your CV(Required)</label> 
           <div className="inputdiv">
            <input type="file" id="choosefilebutton" name='yourcv' required={true}/>
           </div>
            <label htmlFor="message">Message(Optional)</label> <br />
            <input type="text" name='message'/>
            <br />
            <div className="submit-button">
            <button>Submit</button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Footer