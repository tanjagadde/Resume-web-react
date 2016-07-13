import React from 'react';


/**
 * A counter button: tap the button to increase the count.
 */
class WorkInfo extends React.Component {
 
  render() {
    
    return (
    <div className='workInfo'>
        <h1 className='heading'>Work Experience</h1>
        <h3>Technology:Java 1.8, Angular,JavaScript,ReactJS,Java,NodeJS,Git</h3>
        <p>The project Notifications and FeedBack is a webpack component that uses ReactJS to build out its UI. Notification-Component is NOT an Origami component.It makes service calls to Notification-API as well as Feedback/Coachmark-API.Each Notification may contain a list of Coach Marks to display in a next/back sequence. Since each Coach Mark has a different url to display, each Coach Mark display could be a new page load. In order to maintain context between page loads, the URL must contain the id of the current Notification as well as the ID of the current Coach Mark. This will allow the Notification- Component to query the Notification-API and the Coach-Mark-API to rebuild context on each page load.</p>
        <ul>
            <li>Implemented features to the coachmark component to add the back and next buttons.</li>
            <li>Involved in the design and implemented the notifications components.</li>
            <li>Involved in analysis, specification, design, implementation and testing phases of a new 
            project as feedback is like an appstore that allows users to try new features and provide feedback. 
            This allows developers to get their new feature in front of more people while in a beta state, promote 
            early adoption and advertise availability of new applications in a beta state, promote early adoption and 
            advertise availability of new applications.</li>
        </ul>

        <h3>Technology:Java 1.8, Angular, JavaScript, RESTEXPRESS, MongoDB, NodeJS, Git</h3>
        <p>The project Course CopyAPI is a new GRID system that will serve as the system of record for copying of course related information within GRID. It will perform the function of a mediator, simply managing a course copy and monitoring its status.Also part of a different project where the student or professor will be able to login to a UI portal to look into their courses and their performances and assignments</p>
        <ul>
            <li>Implemented few new routes and worked on the enhancements of the Course Copy API.</li>
            <li>Involved in the design and implemented few card visualizations such as histogram and calendar.</li>
            <li>Involved in analysis, specification, design, and implementation and testing phases of a new project as LABS is like an appstore that allows users to try new apps and provide feedback, &c. This allows developers to get their app in front of more people while in a beta state, promote early adoption and advertise availability of new applications.</li>
        </ul>

        <h3>Technology: Java 1.6, Web services, Spring, JDBC, Unix, Oracle 10g</h3>
        <p>The PrepaidService provides operations to manage provisioning and maintenance of prepaid consumer HSD and Video products.The application was developed using ClientServer based architecture.</p>
        <ul>
            <li>Involved in analysis, specification, design, and implementation and testing phases of a new enhancement to the application namely redeem feature</li>
            <li>Resolved product complications at customer sites during activation of internet services on multiple line of business such as HSD and Video</li>
            <li>Involved in designing UML Use case diagrams, Class diagrams, and Sequence diagrams using IBM Rational Software Architect (RSA).</li>
            <li>Used Web services  WSDL and SOAP. For requesting the data from various other services namely location services to get the location details required to check/validate if the activation of the internet can be processed.</li>
        </ul>

         <h3>Technology: Java 1.6, Struts,  Oracle 10g</h3>
        <p>This is a business unit that is focused on Health Insurance. The system was developed to provide health plan sales automation and online health insurance process automation for all size health plans. The application was developed using MVC based architecture.</p>
        <ul>
            <li>Analyzed Business Functionality and use cases and interacted with Users.</li>
            <li>Responsible for designing, coding and developing the application.</li>
            <li>The total application was developed in J2EE using MVC architecture.</li>
        </ul>
    </div>   
    );
  }
}
export default WorkInfo;