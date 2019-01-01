import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Ionicon from 'react-ionicons';

class FirstNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showStatus: true,
            dataContainer: []
        }
    }

    componentWillMount()
    {
        this.setState(()=>{return {
            dataContainer:[
                  {id:'NavUL1_1',Link_to:'/Webkiosk',title:'Webkiosk'},
                  {id:'NavUL1_2',Link_to:'/VirtualTour',title:'Virtual Tour'},
                  {id:'NavUL1_3',Link_to:'/JYC',title:'JUET Youth Club'},
                  {id:'NavUL1_4',Link_to:'/Contact',title:'Contact'}
                  ]
        }})
    }
    get_UpperNavList = () => {
        return (
            <ul className="NavUL">
                {this.state.dataContainer.map((data)=>{
                    return <li key={data.id}><Link to={data.Link_to}>{data.title}</Link></li>
                })}
            </ul>
        )
    }

    render() {
        if(this.state.showStatus)
        {
            return (
                <div className="upper_nav">
                    <nav>
                        {this.get_UpperNavList()}
                    </nav>
                    <ul className="social_links">
                        <li title="Facebook">
                            <Ionicon color="#ffffff" fontSize="2.21rem" icon="logo-facebook"></Ionicon>
                        </li>
                        <li title="Twitter">
                            <Ionicon color="#ffffff" fontSize="2.21rem" icon="logo-twitter"></Ionicon>
                        </li>
                        <li title="YouTube">
                            <Ionicon color="#ffffff" fontSize="2.21rem" icon="logo-youtube"></Ionicon>
                        </li>
                        <li title="LinkedIn">
                            <Ionicon color="#ffffff" fontSize="2.21rem" icon="logo-linkedin"></Ionicon>
                        </li>
                    </ul>
                </div>
            );
        }

    }
}

export default FirstNavbar;
