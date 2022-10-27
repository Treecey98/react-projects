import React from "react"

export default function Introduction(){
  return (
    <div className="intro">
      <img src="images/image0.jpeg" alt="Picture of Ed"/>
      <div className="intro--info">
        <h2>Edward Treece</h2>
        <h4>Frontend Developer</h4>
        <p>https://troopl.com/edwardtreece</p>
        <button type = "button" className="email-btn"><i class="fa-solid fa-envelope"></i>Email</button>
        <button type = "button" className="linkedin-btn"><i class="fa-brands fa-linkedin"></i>LinkedIn</button>
      </div>
    </div>
  )}
