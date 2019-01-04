import React,{Component} from 'react';
//import axios from "axios";
import 'isomorphic-fetch';
import {Link} from 'react-router-dom'
import './styles/faculty.css';

import Ionicon from 'react-ionicons'
/*const ShowModalBoxInfo = (props)=>{
    return(
        <div>
            <FacultyShowInModalForm showStatus={props.Status} Data={props.viewData} />
        </div>
    )
}*/

class DisplayFaculty extends Component 
{
   constructor(props)
   {
       super(props);
       this.state = {
                  ShowModalBox:false
                }
 //this.ActivateModalBox = this.ActivateModalBox.bind(this);
  } 
 
 /* ActivateModalBox = (e)=>{
      e.preventDefault();
    this.setState(()=>{
        return {
            ShowModalBox:true
        }
    })
}*/
    render()
    {
    return( <section id="faculty">
    {this.props.record.map((d)=>{
        return (
            <div key={`${d.id}@${d.department.toString().trim()}`}>
            <div class="facultyContainer">
            <div class="facultyPhotoContainer">
            <img title={d.name} src={'/static/'+d.image.toString()}  alt={d.name.toString()} class="facultyImage" />
            <div class="facultyNameTag">{d.name.toString()}</div>
            <div class="facultyDesignationTag">{d.designation}</div>           
            </div>
            <div class="facultyMainInfoContainer" id={encodeURI(`${d.id}${d.department.toString().trim()}`)}>
                <div class="facultyUpperInfo">
                    <ul>
                        <li>Email-id: <span class="UpperInfoData">{d.email}</span></li>
                        <li>Contact: <span class="UpperInfoData">{d.contact}</span></li>
                    </ul>
                </div>
                <div class="facultyLowerInfo">
                    <p>{`${d.biography.substr(0,350)}....`}</p>
                </div>
            </div>  
            <div class="facultyBriefButton">
                <div class="BriefButton"><Link to={`/juet/faculty/true/${d.department}/${d.id}`}>Brief Profile</Link></div>     
            </div>
        </div>
      
       </div>
        )
    })}

</section>)
    }

}

class FacultyListAll extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            faculty_data:[],
            isLoading:true,
            status:'',
            liveStatus:props.liveStatus,
        }
    }
    componentDidMount() {
    
       // document.title = "Faculties@JUET,Guna";
        fetch(`/api/faculty/${encodeURI('all')}`)
            .then((res)=>{
                if(res.status >= 400)
                {
                    console.log('Error bad Request')
                }
                return res.json()
              
            }).then((res_data)=>{
                this.setState({faculty_data:res_data,isLoading:false})
            })
    }
    
    render()
    {
        if(this.state.liveStatus)
        {
            
                return(
                    <div> 
                    {
                        this.state.isLoading ? 
                        <div style={{position:'relative',background:'transparent',top:'0',height:'30vh',padding:'1em',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Ionicon icon="ios-sync" fontSize="100px" color="#00355f" rotate={true} />
                        </div> : 
                         <div><div class="facultyBackground">
                         <div class="facultyHeadingTag"></div>
                         </div>
                        <DisplayFaculty record={this.state.faculty_data} /></div>
                    }
                    </div>
                   
                )
        }
        else
        {
            return (
                <h2 style={{textAlign:'center'}}>You are not Authorized to See the Content, Please Contact to WebMaster admin.</h2>
            )
        }

    }


}
export default FacultyListAll;

/* <div class="facultyLineContainer"><span class="line"></span></div>*/