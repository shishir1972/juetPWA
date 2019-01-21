import React from 'react'
import {Link} from 'react-router-dom'
export default class QuickAccess extends React.Component
{
    render()
    {
        return (
            <div className="Admission__QuickAccess">
            <ul>
                <li><h2>Quick Access</h2></li>
                <li><Link to="/admissions">Home</Link></li>
                <li><Link to="">Admission Intake</Link></li>
                <li><Link to="">Scholarships</Link></li>
                <li><Link to="">Education Loan</Link></li>
                <li><Link to="/admissions/Fees">Fee Structure</Link></li>
                <li><Link to="">Fee Instruction</Link></li>
            </ul>
        </div>
        )
    }
}