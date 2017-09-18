import React from 'react';
import DesktopBreakpoint from '../responsive_utilities/DesktopBreakpoint';
import TabletBreakpoint from '../responsive_utilities/TabletBreakpoint';
import PhoneBreakpoint from '../responsive_utilities/PhoneBreakpoint';
import DesktopPortfolio from '../components/desktop/Portfolio';

class PortfolioPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="aboutus-page-container">
                <DesktopBreakpoint>
                    <DesktopPortfolio/>
                </DesktopBreakpoint>
                <TabletBreakpoint>
                    <DesktopPortfolio/>
                </TabletBreakpoint>
                <PhoneBreakpoint>
                    <h1>mobile AboutUs</h1>
                </PhoneBreakpoint>
            </div>
        );
    }
}

export default PortfolioPage;