import React from 'react';
import DesktopBreakpoint from '../responsive_utilities/DesktopBreakpoint';
import TabletBreakpoint from '../responsive_utilities/TabletBreakpoint';
import PhoneBreakpoint from '../responsive_utilities/PhoneBreakpoint';
import DesktopIndexPage from '../components/desktop/IndexPage';
import PhoneIndexPage from '../components/phone/IndexPage';

class IndexPage extends React.Component {
    render() {
        return(
            <div className="index-page-container">
                <DesktopBreakpoint>
                    <DesktopIndexPage/>
                </DesktopBreakpoint>
                <TabletBreakpoint>
                    <DesktopIndexPage/>
                </TabletBreakpoint>
                <PhoneBreakpoint>
                    <PhoneIndexPage />
                </PhoneBreakpoint>
            </div>
        );
    }
}
export default IndexPage;