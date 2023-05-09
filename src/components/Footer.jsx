import React from 'react'
import '../css/footer.scss'
const Footer = () => {
  return (
    <div className="footer">
        <div className="footercontent">
        <form action="">
            <label htmlFor="name">Name(Required)</label> <br />
            <input type="text" name='name' required="true"/>
            <br />
            <label htmlFor="email">Email(Required)</label> <br />
            <input type="email" name='email' required="true"/>
            <br />
            <label htmlFor="yourcv">Your CV(Required)</label> <br />
            <input type="file" name='yourcv' required="true"/>
            <br />
            <label htmlFor="message">Message(Optional)</label> <br />
            <input type="text" name='message'/>
            <br />
            <button>Submit</button>
        </form>
        </div>
    </div>
  )
}

export default Footer