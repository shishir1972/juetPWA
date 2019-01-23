import React from 'react'
import './styles/Admission.css'
import QuickAccess from './QuickAccess';
import AdmissionUpperLook from './AdmissionUpperLook';
import AdmissionInfoLook from './AdmissionInfoLook';


export default class EducationLoan extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
        }
    }
    componentDidMount()
    {
        document.title="Education Loan - Jaypee University of Engineering and Technology, Guna"
      
    }
       render()
       {
        return (
            <div>
                <AdmissionUpperLook UpperTitle={`Admissions ${new Date().getFullYear()}`} />
                <div className="Admission__MainWindow">
                <AdmissionInfoLook MainTitle={`Education Loan from Bank for Higher Studies`}>
                    <div className="EducationLoan">
                         <p> 
                             Nationalized and other Banks provide loans to eligible students for higher education. Banks such as State Bank of India, Punjab National Bank, Bank of India, Allahabad Bank, Bank of Baroda, Oriental Bank of Commerce, Syndicate Bank, Madhya Pradesh Gramin Bank, Central Bank, Union Bank of India, Andhra Bank , Rajasthan Gramin Bank, Madhya Bharat Gramin Bank and State Bank of Patiala etc. have been granting education loans to the students of JUET, Guna.
                         </p>
                        <div className="__EducationLoanOtherInfo">
                            <h3>FACILITIES BY ISSUING REQUIRED DOCUMENTS BY THE UNIVERSITY</h3>
                            <div className="line"></div>
                           <p>
                                University provides required documents for getting the loan from the banks i.e.  Students Bonafide Certificate, Provisional Admission Letters, Fee structures and as per the requirement of the students to get easily loan from the banks. The University however does not undertake any guarantee for pay back of the loan sanctioned by the banks. 
                           </p>
                        </div>
                    </div>  
                </AdmissionInfoLook>
                <QuickAccess/>
                </div>
            </div>
        )
       }    
}

