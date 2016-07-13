import React from 'react';

import WorkInfo from './WorkInfo.js'


/**
 * A counter button: tap the button to increase the count.
 */
class Skills extends React.Component {
 
  render() {
    
    return (
        <div className='skills'>
        <h1 className='heading'>Languages</h1>
        <ul>
        	<li>ReactJs</li>
        	<li>Javascript</li>
        	<li>Nodejs</li>
        	<li>Angularjs</li>
        	<li>Java</li>
        	<li>Python</li>
        	<li>Mongodb</li>
        	<li>SQL</li>
        </ul>
     
     </div>
    );
  }
}
export default Skills;