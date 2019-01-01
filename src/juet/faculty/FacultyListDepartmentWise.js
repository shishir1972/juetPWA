import React,{Component} from 'react';
import 'isomorphic-fetch';
import {Link} from 'react-router-dom'
import './styles/faculty.css';
const DisplayDepartmentFaculties = (props)=> {
    return (<div>
            {props.record.map((d) => {
                return (
                    <div class="facultyContainer">
                    <div class="facultyPhotoContainer">
                    <img title={d.name} src={'/static/'+d.image.toString()}  alt={d.name.toString()} class="facultyImage" />
                    <div class="facultyNameTag">{d.name.toString()}</div>
                    <div class="facultyDesignationTag">{d.designation}</div>           
                    </div>
                    <div class="facultyMainInfoContainer">
                        <div class="facultyUpperInfo">
                            <ul>
                                <li>Education: <span class="UpperInfoData">{d.education}</span></li>
                                <li>Email-id: <span class="UpperInfoData">{d.email}</span></li>
                                <li>Contact: <span class="UpperInfoData">{d.contact}</span></li>
                                <li>Area of Interest: <span class="UpperInfoData">Plastic Technology</span></li>
                            </ul>
                        </div>
                        <div class="facultyLowerInfo">
                            <p>Dr. J.S.P. Rai has completed his higher education from HBTI Kanpur where he served at various positions in his career. He was Professor & Head at Department of Plastic Technology at HBTI Kanpur from 1994 onwards. He also worked as a Director at HBTI Kanpur from 2011 to 2013.</p>
                        </div>
                    </div>  
                    <div class="facultyBriefButton">
                        <div class="BriefButton"><Link href={`/juet/faculty/${d.department}/${d.id}`}><a>Brief Profile</a></Link></div>
                    </div>
                </div>
                )
            })}
    </div>);
};
class FacultyDepartmentProfile extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            faculty_data:[],
            isLoading:true,
            status:'',
            whichDepartment:props.itsDepartment,
            liveStatus:props.liveStatus
        }
    }
    componentDidMount() {
        fetch(`/api/faculty/${encodeURI(this.state.whichDepartment)}`)
            .then((res)=>{
                this.setState({faculty_data:res.data,isLoading:false,status:res.data.status})
            })

    }
    render()
    {

        if(this.state.liveStatus)
        {
            return(
                <div>
                <h1 style={{textAlign:'center'}}>Department of {this.state.whichDepartment}</h1><hr/>    
               <DisplayDepartmentFaculties record={this.state.faculty_data}/>  
                </div>
           
            )
        }
        else
        {
            return (
                <h2>You are not Authorized to See the Content, Please Contact to WebMaster admin.</h2>
            )
        }
    }

}
export default FacultyDepartmentProfile;