import React from 'react';
import ProfInfo from './ProfInfo.js';
import WorkInfo from './WorkInfo.js';
import Skills from './Skills.js';
/**
/**
 * A counter button: tap the button to increase the count.
 */
class CV extends React.Component {
 
  render() {
    
    var myTextField = document.getElementById('quintus_container');
    if(myTextField){
       myTextField.style.display = "none";
    }
    
    return (
      <div>
    <div id='home' className='page'> 
      <div className='imageCVDiv'><img className='profilepic' src="./images/MyPic.JPG"/></div>
       <div>
        <h1><span>CV </span></h1>
        <h2>Tanuja Gadde</h2>
        </div>
        <div>
          <p>Centennial, CO, 80121</p>
          <p>E-mail:tanujagadde@gmail.com</p>
          <p>Phone: 720-360-5237</p>
        <a href="https://www.facebook.com/"><img className='iconspic' src="./images/fb.png" /></a>
         <a href="https://plus.google.com/"> <img className='iconspic' src="./images/googlep.png"/></a>
         <a href="https://twitter.com/"> <img className='iconspic' src="./images/twitter.png"/></a>
        </div>
      </div>
      <div className='info'>
      <ProfInfo className='profInfo'></ProfInfo>
      <Skills className='skills'></Skills>
      <WorkInfo className='workInfo'></WorkInfo> 
      </div>

      </div>
    );
  }
}
export default CV;