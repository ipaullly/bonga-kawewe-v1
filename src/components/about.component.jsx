import React from 'react';
import logoImg from '../images/humaaans.png';

import './about.styles.scss'

const About = () => {
  return (
    <div className="about-page">
      <div className="about">
        <span>
          At Bonga Kawewe, We believe in the better experience in social settings
        </span>
        <br/>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
          dignissim lacus. In non tristique leo. Proin sit amet facilisis sapien.
          Sed hendrerit ornare ipsum ullamcorper rhoncus. Nunc condimentum, enim
          in finibus consequat, orci nisl cursus diam, ut facilisis ante ipsum vel
          libero. Donec in magna vitae eros interdum gravida. Integer venenatis
          erat eget urna congue, id venenatis elit volutpat. Phasellus mattis,
          justo sit amet posuere finibus, lectus ligula sodales justo, id
          venenatis tortor quam a mauris. Aenean vitae felis fermentum,
          scelerisque odio in, sodales purus. Nullam bibendum leo in velit finibus
          tempus. Suspendisse nisi lorem, malesuada ut elit et, vulputate commodo
          tellus.
        </span>
      </div>
      <div className="svg-backdrop">
        <img src={logoImg} alt='hijab'/>
      </div>
    </div>
  );
};

export default About;
