import React,{Component} from 'react';

import 'isomorphic-fetch';

const DisplayIndividualFaculty = (props)=>{
    return( <div>
        <ul style={{display:'grid',gridTemplateColumns:'1fr',gridGap:'1em'}}>
            {props.record.map((d)=>{
                return (
                    <li key={d.id}><img title={d.name} src={'/static/'+d.image.toString()}  alt={d.name.toString()} style={{width:"30%",maxWidth:"100%"}} />{d.name}</li>
                )
            })}
        </ul>
    </div>)

};

class FacultyIndividualProfile extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            faculty_data:[],
            isLoading:true,
            status:'',
            whichDepartment:props.itsDepartment,
            FacultyID:props.itsID,
            liveStatus:props.liveStatus
        }
    }
    componentDidMount() {
        fetch(`/api/faculty/${encodeURI(this.state.whichDepartment+'/'+this.state.FacultyID)}`)
            .then((res)=>{
                this.setState({faculty_data:res.data,isLoading:false,status:res.data.status})
            })

    }
    render()
    {

        if(this.state.liveStatus)
        {
            return(
                <DisplayIndividualFaculty record={this.state.faculty_data}/>
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
export default FacultyIndividualProfile;