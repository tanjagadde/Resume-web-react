import React from 'react';
import Mailto from 'react-mailto';

class Contact extends React.Component {
 
 
  render() { 
   
   var myTextField = document.getElementById('quintus_container');
    if (myTextField) {
      myTextField.style.display = "none";
    }
 var main = document.getElementById('main');
    if(main){
       main.style.display = "none";
    }
   
    return (
      <div>
      <div className='page contact'>
      <h1>CONTACT</h1>
      <h4> Tanuja Gadde </h4>
      <h4>Centennial, CO </h4>
      <h4>Tel:720-360-5237</h4>
      <h4>{"git:https://github.com/tanjagadde?tab=repositories"}</h4>
      <strong>Email Me At:</strong>
       <Mailto email="tanujagadde@gmail.com" obfuscate>
       <strong><u>tanujagadde@gmail.com</u></strong>
      </Mailto>    
      </div>
      
      </div>
    );
  }
}
export default Contact;