import React from 'react';
 
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
      <p><strong>Projects</strong></p>
<p><u><strong>Game: Finding the Programming Languages logos:</strong></u></p>
<ul>
<li>
<p><strong>Technology:Quintus</strong></p>
</li>
<li>
<p>This is a fun project implemented using the Quintus frame work.Rules in this game is to find the logos of the programming language if the player hit a correct logo the count increments and if reached 5 correct logos player wins ,if player hit 5 non programming logos the player looses the game.</p>
</li>
</ul>
<p><u><strong>Facebook Messenger Bot:</strong></u></p>
<ul>
<li>
<p><strong>Technology:JavaScript</strong></p>
</li>
<li>
<p>This app is a facebook messenger bot for a page ,when a user writes a command the webhook listens to incoming get calls from the facebook messenger and responds to it accordingly</p>
</li>
<li>
<p>Example :User-&gt; HELP (in the Fbmessenger)</p>
<p>Bot-&gt; Here I am to help you out follow commands to explore more</p>
<p>1. Wanna know what MLA is upto ? type PROGRAMS</p>
</li>
</ul>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2. Found an issue ? needs to be resloved ? type ISSUES</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 3. Kinda a want yourself upto date with your MLA news ? type NEWS</p>
<p><u><strong>Chrome Plugin For Youtube:</strong></u></p>
<ul>
<li>
<p><strong>Technology:JavaScript</strong></p>
</li>
<li>
<p>This project is chrome plugin in which user should authorize with a valid gmail account once that is successful.</p>
</li>
<li>
<p>The user can search his favorite subscribed videos based between days he wish to watch</p>
</li>
</ul>
<p><u><strong>PostMan-ShortCut-Node Application</strong></u></p>
<ul>
<li>
<p><strong>Technology</strong>:Node.js ,Javascript</p>
</li>
<li>
<p>This application is similar to Postman chrome plugin which makes the all the CRUD calls when given the necessary url,payload and header for the request.PostMan-ShortCut,Postman-Shortcut app doesnt require any those url or the payload or any sort of header it builds it for you based on the input command given by the user</p>
</li>
<li>
<p>Example:Method|CopierIds|Copyids</p>
</li>
</ul>
<p><u><strong>Resume :</strong></u></p>
<ul>
<li>
<p><strong>Technology:React.js</strong></p>
</li>
<li>
<p>This application is webpage developed using the react, which has a detailed description of the resume and some of the projects that are done.The applicaion main implementation is in react-routing.</p>
</li>
</ul>
      </div>
    );
  }
}
export default Projects;