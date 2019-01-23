import React,{Component} from 'react';
import {Link} from 'react-router-dom'
class AdmissionNotification extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            id:new Date(),
            AcademicYear:'',
            MessageToShow:'',
            ButtonOptionText:'',
            liveStatus:props.statusToShow
        }
    }
    componentWillMount()
    {
        this.setState(()=>{
           return {
               AcademicYear:new Date().getFullYear().toString(),
               MessageToShow:'#Admission 2019 is Open',
               ButtonOptionText:'Apply Now'
           }
        })
    }
    render()
    {
        if(this.state.liveStatus)
        {
            return (
                <div className="AdmissionNotification">
                    <div className="AdmissionMessage" id={this.state.AcademicYear}>
                        <h1>{this.state.MessageToShow}</h1>
                    </div>
                    <div className="AdmissionButton">
                        <div className="button1"><Link to="/admissions">{this.state.ButtonOptionText}</Link></div>
                    </div>
                </div>
            )
        }
        else
        {
            return (
                <div className="AdmissionNotification">
                    <div className="AdmissionMessage" id={this.state.AcademicYear}>
                        <h1>Admission is Closed</h1>
                    </div>
                </div>
            )
        }

    }

}
export default AdmissionNotification;