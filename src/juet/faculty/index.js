import React,{Component} from 'react';

import FacultyListAll from './FacultyListAll';
import FacultyIndividualProfile from './FacultyListIndividual';
import FacultyDepartmentProfile from  './FacultyListDepartmentWise';

import FacultyShowInModalForm from './FacultyShowInModalForm';


class FacultyMain extends  Component
{
    static getInitialProps({match})
    {
        return {
            listAllValue:!match.params.listAllValue ? false : true,
            departmentValue:!match.params.departmentValue ? false:true,
            individualValue:!match.params.individualValue ? false:true,
            departmentName:match.params.departmentName,
            itsID:match.params.itsID,
            BoxView:match.params.BoxView
        }
    }
    constructor(props)
    {
        super(props);
        this.state = {
            options:{BoxView:props.BoxView,listAll:props.listAllValue,departmentWise:props.departmentValue,individualWise:props.individualValue},
            LinkParameters:{department:props.departmentName,id:props.itsID}
        }
    }
    render()
    {
        if(this.state.options.departmentWise)
        {
            return(
                <div>
                <FacultyDepartmentProfile liveStatus={true} itsDepartment={this.state.LinkParameters.department} />
                </div>
            )
        }

        if(this.state.options.individualWise)
        {

            return(
                <div>
               <FacultyIndividualProfile liveStatus={true} itsDepartment={this.state.LinkParameters.department} itsID={this.state.LinkParameters.id}/>
               </div>
            )
        }
        if(!this.state.options)
        {
            return(
                <div>
                <h1>Error 404 Not Found, Please Contact to WebMaster@juet.ac.in</h1>
                </div>
            )
        }
        else
        {
           
            return(
                <div>
                    <div>
                    <FacultyListAll liveStatus={true}/>
                    {
                        this.state.options.BoxView ? <FacultyShowInModalForm showStatus={true} DataDepartment={this.state.LinkParameters.department} DataID={this.state.LinkParameters.id}/> : ''
                    }
    
                    </div>
                </div>
            )
        }
       
    }

}
export default FacultyMain;