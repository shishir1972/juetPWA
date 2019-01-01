import React,{ Component } from 'react';
import IntroSection from './collegeIntroSection';
import AdmissionNotification from "./AdmissionNotification";
import AnnouncementsCards from './AnnouncementsCards';

class BodyMainLandingPage extends Component
{
    render(){
        return(
            <div>
            <IntroSection/>
            <AdmissionNotification statusToShow={true}/>
            <AnnouncementsCards statusToShow={true} />
            </div>
        )
    }
}

export default BodyMainLandingPage;