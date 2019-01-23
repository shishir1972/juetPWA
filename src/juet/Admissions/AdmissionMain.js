import React, { Component } from 'react'
import './styles/Admission.css'

import AdmissionUpperLook from './AdmissionUpperLook'
import QuickAccess from './QuickAccess';
import AdmissionInfoLook from './AdmissionInfoLook';
import {Link} from 'react-router-dom'
import {LoadingView} from '../LoadingView/Loading'

import {connect} from 'react-redux'
import {admissionProgrammes} from '../../redux/actions/ADMISSION/fetchProgrammes'
const ProgrammesOfferedAdmission = (props) => {
    return (
        <div>
             <h2 className="SubTitle">{props.DataObj.UpperTitle}</h2>
             <div className="AdmissionApplication">
                  {props.DataObj.SubCategories.map((data,i)=>{
                      return ( <div key={i} className="__card">
                      {data.imagePath ? <div className="__cardImage"><img src={data.imagePath} alt="__card" /></div> : null}
                     <div className="__cardTitle">{data.quota}</div>
                     <div className="__cardDetails">
                       <ul>
                           {data.otherLinks.map((data_links,i)=>{
                               return (
                                   <li key={i+new Date().toUTCString()}><Link to={data_links.LinkTo}>{data_links.title}</Link></li>
                               )
                           })}
                       </ul>
                     </div>
                     <div className="__cardButton"><Link to={props.DataObj.ApplyOnlineLink}>Apply Online</Link></div>
                  </div>
                  )
                      
                  })}
               
             </div>  
        </div>
       
    )
}

class AdmissionHome extends Component {
 
    static fetchData(store)
    {
        return store.dispatch(admissionProgrammes())
    }
    constructor(props)
    {
        super(props)
    }
    componentDidMount()
    {
        document.title="Admissions - Jaypee University of Engineering And Technology, Guna"
        this.props.onFetchProgrammes()
    }
    render() {
    return (
        <section id="Admissions">
    
        <AdmissionUpperLook UpperTitle={`Admissions ${new Date().getFullYear()}`} />
         
                <div className="Admission__MainWindow">
                <AdmissionInfoLook MainTitle={`Programmes Offered - ${new Date().getFullYear()}`} >
                {this.props.Programmes.AdmissionProgrammes ? <div><ProgrammesOfferedAdmission DataObj={this.props.Programmes.AdmissionProgrammes.BTech} />
                <ProgrammesOfferedAdmission DataObj={this.props.Programmes.AdmissionProgrammes.MTech} />
                </div>
                : <LoadingView /> } 

        </AdmissionInfoLook>
        <QuickAccess />
        </div>
    
    </section>
    )
  }
}

const MapStateToProps = (state) => {
    return {
        Programmes:state.admissionStore
    }
}

const MapDispatchToProps = (dispatch) => {
  return {
      onFetchProgrammes : ()=> dispatch(admissionProgrammes())
  }
}
export default connect(MapStateToProps,MapDispatchToProps)(AdmissionHome)
