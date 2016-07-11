import React from 'react';
/**
 * A counter button: tap the button to increase the count.
 */
class Contact extends React.Component {
 
 
  render() { 
    var myTextField = document.getElementById('quintus_container');
    if(myTextField){
       myTextField.style.display = "none";
    }
    return (
      <div className='page contact'>
      <h1>CONTACT</h1>
      <h4> Tanuja Gadde </h4>
      <h4>6601 S Vine st</h4>
      <h4>Centennial CO 80121</h4>
      <h4>Tel:720-360-5237</h4>
      <h4>Email:tanujagadde@gmail.com</h4>
      <h4>{"git:https://github.com/tanjagadde?tab=repositories"}</h4>
      </div>
    );
  }
}
export default Contact;