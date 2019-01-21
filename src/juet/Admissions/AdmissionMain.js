import React, { Component } from 'react'
import './styles/Admission.css'

import AdmissionUpperLook from './AdmissionUpperLook'
import QuickAccess from './QuickAccess';
import AdmissionInfoLook from './AdmissionInfoLook';

import {connect} from 'react-redux'
import {admissionProcedure} from '../../redux/actions/ADMISSION/fetchProcedure'
class AdmissionHome extends Component {
    static fetchData(store)
    {
        return store.dispatch(admissionProcedure())
    }
    constructor(props)
    {
        super(props)
        this.state = {
            procedureData:undefined
        }
    }
    componentDidMount()
    {
        document.title="Admissions - Jaypee University of Engineering And Technology, Guna"
        this.props.onFetchProcedures()
    }
    render() {
    return (
        <section id="Admissions">
    
        <AdmissionUpperLook UpperTitle="Admissions 2019" />
         
        <div className="Admission__MainWindow">
           <AdmissionInfoLook MainTitle="Admission Procedure" >
         <div className="AdmissionProcedure">
           {this.props.Admission.AdmissionData && this.props.Admission.AdmissionData.AdmissionProcedure.map((data,i)=>{
                return (
                    <ul>
                        <li key={data.id}><h3>{data.id}</h3>
                           <div className="ProcedurePoints">
                               <ul>
                                {data.points.map((pointsData,i)=>{
                                        return (
                                            <li key={i}>{`${i+1}:) ${pointsData}`}</li>
                                        )
                                    })}
                               </ul>
                           </div>
                        </li>
                          
                    </ul>
                )
            })}
           </div>
           </AdmissionInfoLook>
          <QuickAccess />
        </div>
    
    </section>
    )
  }
}

const MapStateToProps = (state) => {
    return {
         Admission:state.admissionStore
    }
}
const MapPropsToDispatch = (dispatch) => {
    return {
        onFetchProcedures : () => dispatch(admissionProcedure())
    }
}

export default connect(MapStateToProps,MapPropsToDispatch)(AdmissionHome)