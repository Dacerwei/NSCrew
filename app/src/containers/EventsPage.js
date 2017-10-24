import React from 'react';
import DesktopBreakpoint from '../responsive_utilities/DesktopBreakpoint';
import TabletBreakpoint from '../responsive_utilities/TabletBreakpoint';
import PhoneBreakpoint from '../responsive_utilities/PhoneBreakpoint';
import DesktopSwingEvents from '../components/desktop/SwingEvents';
import PhoneSwingEvents from '../components/phone/SwingEvents';

class EventsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="events-page-container">
                <DesktopBreakpoint>
                    <DesktopSwingEvents/>
                </DesktopBreakpoint>
                <TabletBreakpoint>
                    <DesktopSwingEvents/>
                </TabletBreakpoint>
                <PhoneBreakpoint>
                    <PhoneSwingEvents/>
                </PhoneBreakpoint>
            </div>
        );
    }
}

export default EventsPage;