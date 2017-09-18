import React from 'react';
import DesktopBreakpoint from '../responsive_utilities/DesktopBreakpoint';
import TabletBreakpoint from '../responsive_utilities/TabletBreakpoint';
import PhoneBreakpoint from '../responsive_utilities/PhoneBreakpoint';
import DesktopCooperative from '../components/Cooperative';


class CooperativePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="cooperative-page-container">
                <DesktopBreakpoint>
                    <DesktopCooperative/>
                </DesktopBreakpoint>
                <TabletBreakpoint>
                    <DesktopCooperative/>
                </TabletBreakpoint>
                <PhoneBreakpoint>
                    <h1>phone coop</h1>
                </PhoneBreakpoint>
            </div>
        );
    }
}

export default CooperativePage;