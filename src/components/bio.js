import React from "react"
import PictureFrame from "./pictureframe.js"
import Groningen from "../../src/images/groningen.jpeg"

const Background = () => (
  <div className="Bio">
    <div className="Cards">
      <div className="imagecard cardimageleft">
        {/* <img
          className="imagegroningen"
          src={Groningen}
          width={"100%"}
          height="100%"
        ></img> */}
        <PictureFrame></PictureFrame>
      </div>
      <h1 className={"titlebio"}>Bio</h1>
      <div className="description" className="carddescriptionright">
        <p className="copy">
          While obtaining my Master's degree in Psychology in the beautiful city
          of Groningen, I got more and more interested in the combination of
          (web) technology and human behaviour. To pursue this, I started
          learning more about web development and digital user experiences.
          <br></br>
          <br></br>My first experiences with the former was when I got to create
          a/b tests for an online webshop, while learning more about user
          experiences when I started working at the University Medical Center
          Groningen. By researching the workflows of medical staff I helped
          build and implement custom interfaces of the hospital-wide electronic
          medical record (Epic).
          <br></br>
          <br></br>About a year later I started working at Framer, where I
          manage our thriving communities and make sure all our users and
          organizations are receiving the technical support they require.
        </p>
        <a class="learnmore" href="mailto:viktor@renkema.com">
          ASK ME MORE
        </a>
      </div>
    </div>
  </div>
)

export default Background
