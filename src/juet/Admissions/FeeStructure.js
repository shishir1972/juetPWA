import React from 'react'
import './styles/Admission.css'
import QuickAccess from './QuickAccess';
import AdmissionUpperLook from './AdmissionUpperLook';
import AdmissionInfoLook from './AdmissionInfoLook';

import fetch from 'isomorphic-fetch'
export default class FeeStructure extends React.Component
{
    static fetchData()
    {
       
    }
    constructor(props)
    {
        super(props)
        this.state = {
            FeesData:undefined
        }
    }
    componentDidMount()
    {
        document.title="Fees - Jaypee University of Engineering and Technology, Guna"
        fetch(`http://localhost:3000/api/admission/fees`)
        .then(res => res.json())
        .then(data => this.setState({FeesData:data}))
    }
       render()
       {
        return (
            <div>
                <AdmissionUpperLook UpperTitle = "Admissions 2019" />
                <div className="Admission__MainWindow">
                <AdmissionInfoLook MainTitle="Academic Fee Structure 2019">
                 {this.state.FeesData ?  <ul>
                      {this.state.FeesData.IndianStudent.Academic.map((data,i)=>{
                          return (<li key={i}>{data.CourseName}</li>)
                      })}
                  </ul> : null}
                 
                </AdmissionInfoLook>
                <QuickAccess/>
                </div>
            </div>
        )
       }    
}

