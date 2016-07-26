import React from 'react';

class Projects extends React.Component {
 
 
  render() {
    var myTextField = document.getElementById('quintus_container');
    if (myTextField) {
      myTextField.style.display = "none";
    }
    var main = document.getElementById('main');
    if (main) {
      main.style.display = "none";
    }
    var main = document.getElementById('gamehead');
    if (main) {
      main.style.display = "none";
    }
    return (
      <div>
      <div className='page'>
        <h1>Personal Projects</h1>
        <p>Below are breif description of all the personal projects that have been worked upon.</p>
        <p>Each project is an interesting task since they are outside my day to day work which resulted in lot of learning to do and interesting challenges to solve and I enjoyed doing them</p>
      </div>
     <div className='projectInfo'>
        <h3>Game: Finding the Programming Languages logos:</h3>
        <p><strong>Technology:Quintus</strong></p>
        <p className='projectBorder'>This is a fun project implemented using the Quintus frame work.Rules in this game is to find the logos of the programming language if the player hit a correct logo the count increments and if reached 5 correct logos player wins ,if player hit 5 non programming logos the player looses the game.</p>
    
        <h3>Facebook Messenger Bot:</h3>
        <p><strong>Technology:JavaScript</strong></p>
        <p className='projectBorder'>
          <ul>
            <li>This app is a facebook messenger bot for a page ,when a user writes a command the webhook listens to incoming get calls from the facebook messenger and responds to it accordingly</li>
           <li> Example :User-> HELP (in the Fbmessenger)</li>
              <li> Bot-> Here I am to help you out follow commands to explore more
                <ul>
                   <li> 1. Wanna know what MLA is upto ? type PROGRAMS</li>
                  <li> 2. Found an issue ? needs to be resloved ? type ISSUES</li>
                  <li>3. Kinda a want yourself upto date with your MLA news ? type NEWS</li>
                  </ul></li></ul></p>
     
     
        <h3>Chrome Plugin For Youtube:</h3>
        <p><strong>Technology:JavaScript</strong></p>
        <p className='projectBorder'><ul><li>This project is chrome plugin in which user should authorize with a valid gmail account once that is successful.</li>
       <li> The user can search his favorite subscribed videos between the days he wish to watch</li></ul></p>
      

       
        <h3>PostMan-ShortCut-Node Application::</h3>
        <p><strong>Technology:Node.js ,Javascript</strong></p>
        <p className='projectBorder'><ul><li>This application is similar to Postman chrome plugin which makes the all the CRUD calls when given the necessary url,payload and header for the request.PostMan-ShortCut,Postman-Shortcut app doesnt require any of those url or the payload or any sort of header it builds it for you based on the input command given by the user.</li>
        <li>Example:Method|CopierIds|Copyids</li></ul></p>
      

      
        <h3>Resume:</h3>
        <p><strong>Technology:React.js</strong></p>
        <p className='projectBorder'><ul><li>This application is webpage developed using the react, which has a detailed description of the resume and some of the projects that are done.</li>
        <li>The applicaion main implementation is in react-routing.</li></ul></p>
      </div>
      </div>
    );
  }
}
export default Projects;