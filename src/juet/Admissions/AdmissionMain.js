import React, { Component } from 'react'
import './styles/Admission.css'

import AdmissionUpperLook from './AdmissionUpperLook'
import QuickAccess from './QuickAccess';
import AdmissionInfoLook from './AdmissionInfoLook';

import Ionicon from 'react-ionicons';
export default class AdmissionHome extends Component {
 
    constructor(props)
    {
        super(props)
       
    }
    componentDidMount()
    {
        document.title="Admissions - Jaypee University of Engineering And Technology, Guna"
    
    }
    render() {
    return (
        <section id="Admissions">
    
        <AdmissionUpperLook UpperTitle={`Admissions ${new Date().getFullYear()}`} />
         
        <div className="Admission__MainWindow">
           <AdmissionInfoLook MainTitle={`B.Tech Admission - ${new Date().getFullYear()}`} >
           <div className="AdmissionApplication">
                    <div className="__card">
                        <div className="__cardImage"><img src='/static/images/rd.jpg' alt="__card" /></div>
                       <div className="__cardTitle">B.Tech. Programme [ JEE Rank Based ]</div>
                       <div className="__cardDetails">
                         <ul>
                             <li>Important Dates</li>
                             <li>Download Offline Application Form</li>
                         </ul>
                       </div>
                       <div className="__cardButton">Apply Online</div>
                    </div>
                    <div className="__card">
                        <div className="__cardImage"><img src='/static/images/isf.jpg' alt="__card" /></div>
                        <div className="__cardTitle">B.Tech. Programme [ 10+2 Merit Based ]</div>
                        <div className="__cardDetails">
                        <ul>
                             <li>Important Dates</li>
                             <li>Download Offline Application Form</li>
                         </ul>
                         </div>
                        <div className="__cardButton">Apply Online</div>
                     </div>
                     <div className="__card">
                        <div className="__cardImage"><img src='/static/images/cl5.jpg' alt="__card" /></div>
                        <div className="__cardTitle">B.Tech. Programme [ Merit Based Lateral Entry in 2nd Year ]</div>
                        <div className="__cardDetails">
                        <ul>
                             <li>Important Dates</li>
                             <li>Download Offline Application Form</li>
                         </ul>
                         </div>
                        <div className="__cardButton">Apply Online</div>
                     </div>
                </div>  
           </AdmissionInfoLook>
          <QuickAccess />
        </div>
    
    </section>
    )
  }
}

