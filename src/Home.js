import React from 'react';

class Home extends React.Component {
 
 
  render() {
        var myTextField = document.getElementById('quintus_container');
        if (myTextField) {
            myTextField.style.display = "block";
            myTextField.style.top = "250px";
    }
    return (
        <div>
      <div id='home' className='page'> 
      <div className='imageDiv'><img className='profilepic' src="./images/MyPic.JPG"/></div>
       <div className ='intro'>
        <h1><span>Hello ,I am Tanuja Gadde </span></h1>
        <p class="font_8">&nbsp;</p>
        <p class="font_8">Looking for the opportunity to bring 3+ years experience with programming, technology engineering, server maintenance, critical thinking,
         and problem solving skills to a Software Engineer position 
        </p>
        </div>
      </div>
      </div>

    );
  }
}
export default Home;