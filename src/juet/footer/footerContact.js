import React,{Component} from 'react';

class FooterAddContact extends Component
{
render()
{
    return(
        <div class="ContactInfo">
        <ul>
            <li><h1>Contact us</h1></li>   
            <li><img src="/static/images/Jaypee.png" style={{"maxWidth":"100%","width":"60%"}} /></li>
            <li>07544-267051, 267310-314</li>
            <li>07544-267011</li>
            <li>contact@juet.ac.in</li>
            <li>A.B Road,Raghogarh, Guna (M.P), 473226 ,India</li>
            <li></li>
        </ul>
        </div>          
    )
}
}

export default FooterAddContact;
