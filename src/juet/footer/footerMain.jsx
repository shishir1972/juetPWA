import React,{Component} from 'react';

import FooterAddContact from './footerContact';
import FooterAddDisclosures from './footerDisclosures';
import FooterAddImpLinks from './footerImpLinks';
//import FooterAddTCPrograms from './footerTCPrograms';

import './styles/footer.css';

class FooterMake extends Component
{
render()
{
    return(
        <section id="footer">
                <FooterAddDisclosures />
                <FooterAddImpLinks />
                <FooterAddImpLinks />
                <FooterAddContact />
        </section>
    )
}
}

export default FooterMake;