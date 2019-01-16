import React, { Component } from 'react'
import './styles/Admission.css'

export default class AdmissionHome extends Component {
    componentDidMount()
    {
        document.title="Admissions - Jaypee University of Engineering And Technology, Guna"
    }
    render() {
    return (
        <section id="Admissions">
  
        <div className="Admission__Upper">
            <div className="container">
                    <label className="Admission__Title">
                            <h1>Admissions 2019</h1>
                     </label>
            </div>
        </div>
        
         <div className="Admission__MainWindow">
             <div className="Admission__InfoWindow">
               <h1>Admission Procedure</h1>
                 <div className="Admission__Content">
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, perspiciatis repellendus ducimus et iure possimus omnis quidem corporis sint hic at necessitatibus voluptatem perferendis harum! Eum blanditiis ipsa at neque!
                     Maiores repellat odit, aperiam incidunt, recusandae eum consequatur quisquam excepturi iure vitae ratione? Labore ducimus amet vel rem! Nulla mollitia dolores consectetur alias aut, quas perspiciatis adipisci dolore incidunt! Minima.
                     Nam quos dicta minus odio beatae eveniet id, quis itaque voluptatibus quae nostrum nobis reprehenderit, repellat suscipit nemo. Laudantium cumque consequuntur, ea dolor ipsum voluptatibus placeat voluptatum aliquid atque repudiandae!
                     Architecto blanditiis enim, expedita eligendi adipisci repellendus porro eius quod quisquam dolorem sit quas odit numquam magnam aut cupiditate ipsa provident modi quidem minus! Quibusdam similique pariatur atque porro fugiat?
                     
                    </p>
                 </div>
             </div>
             <div className="Admission__QuickAccess">
                 <ul>
                     <li><h2>Quick Access</h2></li>
                     <li>Home</li>
                     <li>Admission Intake</li>
                     <li>Scholarships</li>
                     <li>Education Loan</li>
                     <li>Fee Structure</li>
                     <li>Fee Instruction</li>
                 </ul>
             </div>
         </div>
    </section>
    )
  }
}
