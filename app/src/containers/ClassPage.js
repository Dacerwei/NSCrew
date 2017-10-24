import React from 'react';
import DesktopBreakpoint from '../responsive_utilities/DesktopBreakpoint';
import TabletBreakpoint from '../responsive_utilities/TabletBreakpoint';
import PhoneBreakpoint from '../responsive_utilities/PhoneBreakpoint';
import DesktopClasses from '../components/desktop/Classes';
import PhoneClasses from '../components/phone/Classes';

class ClassPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="aboutus-page-container">
                <DesktopBreakpoint>
                    <DesktopClasses/>
                </DesktopBreakpoint>
                <TabletBreakpoint>
                    <DesktopClasses/>
                </TabletBreakpoint>
                <PhoneBreakpoint>
                    <div className="mobile-phone">
                        <PhoneClasses/>
                    </div>
                </PhoneBreakpoint>
            </div>
        );
    }
}

export default ClassPage;