import React from 'react';
import DesktopBreakpoint from '../responsive_utilities/DesktopBreakpoint';
import TabletBreakpoint from '../responsive_utilities/TabletBreakpoint';
import PhoneBreakpoint from '../responsive_utilities/PhoneBreakpoint';
import DesktopSwingEvents from '../components/SwingEvents';

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
                    <h1> mobile Swing Events</h1>
                </PhoneBreakpoint>
            </div>
        );
    }
}

export default EventsPage;