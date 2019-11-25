import React from "react"
import FramerImg from "./framerimg.js"

export default function Framer(props) {
  return (
    <div className="Framer">
      <div className="Cards">
        <div className="cardtitleleft title">Framer</div>
        <div className="description carddescriptionleft">
          <p className="copy">
            Starting out at Framer, as Community and Support Specialist I
            ensured our users are getting the support they required. This not
            only meant providing direct help via our support channels, but also
            creating support articles, writing helpful community posts and
            helping users with organising meetups in their local communities.
            <br></br>
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            iaculis venenatis risus non rutrum. Phasellus ut pharetra massa. Nam
            elementum tellus venenatis sapien venenatis, sed pulvinar neque
            malesuada. Etiam eu ante id lacus interdum sagittis. Nullam ex eros,
            accumsan eget lacus a, vehicula accumsan libero. Ut eget lorem et
            felis scelerisque consectetur.
            {/* Currently I moved into the Product Specialist role, where
            my focus extended to also helping users at organizations such as
            KLM, Google and others to become succesful, effective teams that can
            fully utilize Framer as their prototyping resource. This is done in
            the form of on-site workshops and online calls. */}
          </p>
          <a class="learnmore" href="https://www.framer.com">
            VISIT FRAMER.COM
          </a>
        </div>

        {/* <a class="learnmore" href="https://www.framer.com">
          VISIT FRAMER.COM
        </a> */}

        <div className="imgright imagecard">
          <FramerImg></FramerImg>
        </div>
      </div>
    </div>
  )
}
