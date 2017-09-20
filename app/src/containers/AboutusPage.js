import React from 'react';
import DesktopBreakpoint from '../responsive_utilities/DesktopBreakpoint';
import TabletBreakpoint from '../responsive_utilities/TabletBreakpoint';
import PhoneBreakpoint from '../responsive_utilities/PhoneBreakpoint';
import DesktopAboutUs from '../components/desktop/AboutUs';
import PhoneAboutUs from '../components/phone/AboutUs';

class AboutusPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="aboutus-page-container">
                <DesktopBreakpoint>
                    <DesktopAboutUs/>
                </DesktopBreakpoint>
                <TabletBreakpoint>
                    <DesktopAboutUs/>
                </TabletBreakpoint>
                <PhoneBreakpoint>
                    <div className="mobile-phone">
                        <PhoneAboutUs/>
                    </div>
                </PhoneBreakpoint>
            </div>
        );
    }
}

export default AboutusPage;