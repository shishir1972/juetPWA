import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import './styles/faculty.css';
import {connect} from 'react-redux'
import {facultyAll} from '../../redux/actions/FACULTY/fetchFaculty'
import {LoadingView} from '../LoadingView/Loading'
import { bindActionCreators } from 'redux'

class DisplayFaculty extends Component 
{
   constructor(props)
   {
       super(props);
       this.state = {
                  ShowModalBox:false
                }
    }
    render()
    {
    return( <section id="faculty">
    {this.props.record.map((d)=>{
        return (
            <div key={`${d.id}@${d.department.toString().trim()}`}>
            <div className="facultyContainer">
            <div className="facultyPhotoContainer">
            <img title={d.name} src={'/static/'+d.image.toString()}  alt={d.name.toString()} className="facultyImage" />
            <div className="facultyNameTag">{d.name.toString()}</div>
            <div className="facultyDesignationTag">{d.designation}</div>           
            </div>
            <div className="facultyMainInfoContainer" id={encodeURI(`${d.id}${d.department.toString().trim()}`)}>
                <div className="facultyUpperInfo">
                    <ul>
                        <li>Email-id: <span className="UpperInfoData">{d.email}</span></li>
                        <li>Contact: <span className="UpperInfoData">{d.contact}</span></li>
                    </ul>
                </div>
                <div className="facultyLowerInfo">
                    <p>{`${d.biography.substr(0,350)}....`}</p>
                </div>
            </div>  
            <div className="facultyBriefButton">
                <div className="BriefButton"><Link to={`/juet/faculty/true/${d.department}/${d.id}`}>Brief Profile</Link></div>     
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
    static fetchData(store)
    {
        return store.dispatch(facultyAll())
    }
    constructor(props)
    {
        super(props);
        this.state = {
            isLoading:true,
            liveStatus:true,
        }
    }

    componentDidMount() {
        
        document.title = "Faculties@JUET,Guna";
        this.props.onFetchFacultyAll() 
      
    }
    
    render()
    {
        if(this.state.liveStatus)
        {
            
                return(
                    <div> 
                      
                    {
                        
                         this.props.faculty.isLoading != false ? 
                         <LoadingView />  : 
                         <div><div className="facultyBackground">
                         <div className="facultyHeadingTag"></div>
                         </div>
                        <DisplayFaculty record={this.props.faculty.fetchedData_OF_FACULTY} /></div>
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

const MapStateToProps = (state) => {
    return {
        faculty:state.facultyStore
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        onFetchFacultyAll : () => dispatch(facultyAll())
    }
}
export default connect(MapStateToProps,MapDispatchToProps)(FacultyListAll);

/* <div className="facultyLineContainer"><span className="line"></span></div>*/