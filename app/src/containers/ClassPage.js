import React from 'react';
import DesktopBreakpoint from '../responsive_utilities/DesktopBreakpoint';
import TabletBreakpoint from '../responsive_utilities/TabletBreakpoint';
import PhoneBreakpoint from '../responsive_utilities/PhoneBreakpoint';
import DesktopClass from '../components/desktop/Class';
import PhoneClass from '../components/phone/Class';

class ClassPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="aboutus-page-container">
                <DesktopBreakpoint>
                    <DesktopClass/>
                </DesktopBreakpoint>
                <TabletBreakpoint>
                    <DesktopClass/>
                </TabletBreakpoint>
                <PhoneBreakpoint>
                    <div className="mobile-phone">
                        <PhoneClass/>
                    </div>
                </PhoneBreakpoint>
            </div>
        );
    }
}

export default ClassPage;