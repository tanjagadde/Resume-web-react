import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, withRouter, useRouterHistory } from 'react-router'
import { createHistory } from 'history'
import { RouteTransition } from 'react-router-transition';
import './global.css'
import Home from './Home.js'
import Projects from './Projects.js'
import Contact from './Contact.js'
import CV from './CV.js'

const browserHistory = useRouterHistory(createHistory)({ basename: '/' })
const App = React.createClass({


  render() {

    return (
      <div className='navigation'>
        <nav>
        <ul className='headerUl'>
            <Link to="home" activeClassName="active">Home</Link>
            <Link to="cv" activeClassName="active">CV</Link>
            <Link to="projects" activeClassName="active">Personal Projects</Link>
            <Link to="contact" activeClassName="active">Contact</Link>
        </ul>
        </nav>
         <div id='main' className='main'>
      <div className='imageDiv'><img className='profilepic' src="./images/MyPic.JPG"/></div>
       <div className ='intro'>
       <h1>Hello ,I am Tanuja Gadde</h1>
        <p>&nbsp;</p>
        <p>Looking for the opportunity to bring 3+ years experience with programming, technology engineering, server maintenance, critical thinking,
         and problem solving skills to a Software Engineer position </p>
        </div>
      </div>
      <div className="icons">
      <ul style={{"listStyle": "none"}}>
          <li>  <a href="http://www.linkedin.com/in/tanuja-gadde"><img src="./images/lin.png" alt="" width="35" height="40" title="LinkedIn Profile"></img></a></li>
           <li> <a href="./Tanuja_Gadde_resume.pdf"><img src="./images/pdf.png" alt="" width="35" height="40" title="Resume"></img></a></li>
           <li> <a href="http://github.com/tanjagadde"><img src="./images/github.png" alt="" width="35" height="40" title="Github"></img></a></li>
            </ul>
      </div>
      <div className='gameHeading'>
        <div><h3>Latest Project </h3>
        <p>Simple Fun Game, Find 5 Programming Languange Logos ,Click on the Start Game</p>
        </div>
      </div>
       <RouteTransition
    pathname={this.props.location.pathname}
    atEnter={{ opacity: 0.5 }}
    atLeave={{ opacity: 0 }}
    atActive={{ opacity: 1 }}
  >
    {this.props.children}
  </RouteTransition>
   
      </div>
    )
  }
})

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="home" component={Home} />
      <Route path="cv" component={CV} />
      <Route path="projects" component={Projects} />
      <Route path="contact" component={Contact} />
    </Route>
  </Router>
), document.getElementById('example'))
