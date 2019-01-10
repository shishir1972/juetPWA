import React,{Component} from 'react';
import './styles/facultyBox.css';
import 'isomorphic-fetch';
import {Link} from 'react-router-dom'

const DisplayFacultyBox = (props)=>{
  

};

class FacultyShowInModalForm extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            ShowModalBox:props.showStatus,
            DataView:{department:props.DataDepartment,id:props.DataID},
            faculty_data_box:[]
        }
       this.HandleModalCloseClick.bind(this)
    }
    componentDidMount()
    {
        fetch(`/api/faculty/${encodeURI(this.state.DataView.department+'/'+this.state.DataView.id)}`)
        .then((res)=>{
            this.setState({faculty_data_box:res.data})
        })
    }
   
    HandleModalCloseClick = ()=>{
        this.props.showStatus = false;
        this.setState(()=>{
            return {
                ShowModalBox:this.props.showStatus
            }
        })
    }

render()
{  
    if(this.state.ShowModalBox)
    {  
    return( <section id="facultyBox">
    {this.state.faculty_data_box.map((data)=>{
       return(
                  <div class="facultyBoxModalContainer">
                      <div class="facultyBoxModalMain">
                      <div class="facultyBoxModalClose">
                                    <div class="BoxCloseButton">
                                       <Link prefetch href={`/juet/faculty/#${data.id}${encodeURI(data.department.toString().trim())}`}><a style={{color:'white'}} onClick={this.HandleModalCloseClick}>&times;</a></Link>
                                    </div>
                                </div>
                          <div class="facultyBoxUpper">
                             <div class="facultyBoxProfilePic">
                                  <img src={`/static/${data.image}`} title={data.name} alt={data.name} />
                                  <div class="displayName">
                                    {data.name}
                                   </div>
                                  <div class="displayDesignation">
                                  {data.designation}
                                  </div>   
                             </div>
                             <div class="facultyBoxProfileDetails">
                                  <div class="detailsContainer">
                                      <ul>
                                          <li><label>Education:</label> {data.education}</li>
                                          <li><label>E-mail:</label> {data.email}</li>
                                          <li><label>Contact:</label>{data.contact}</li>
                                          <li><label>Area of Interest:</label>{data.research}</li>
                                      </ul>
                                  </div>
                             </div>
                          </div>
                          <div class="facultyBoxLower">
                              <p>{data.biography}</p>
                          </div>
                      </div>
                  </div>
            )
    })}
       </section>
)
    }
    else
    {
        return null

    }
}
}

export default FacultyShowInModalForm;