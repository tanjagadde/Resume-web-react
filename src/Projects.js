import React from 'react';
import __html from './projects.html';
/**
 * A counter button: tap the button to increase the count.
 */
class Projects extends React.Component {
 
 
  render() {
    var myTextField = document.getElementById('quintus_container');
    if(myTextField){
       myTextField.style.display = "none";
    }
    return (
      <div className='page'>
      <div dangerouslySetInnerHTML={{__html: __html}}/>
      </div>
    );
  }
}
export default Projects;