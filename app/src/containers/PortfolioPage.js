import React from 'react';
import DesktopBreakpoint from '../responsive_utilities/DesktopBreakpoint';
import TabletBreakpoint from '../responsive_utilities/TabletBreakpoint';
import PhoneBreakpoint from '../responsive_utilities/PhoneBreakpoint';
import DesktopPortfolio from '../components/desktop/Portfolio';
import PhonePortfolio from '../components/phone/Portfolio';
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
                    <div className="mobile-phone">
                        <PhonePortfolio />
                    </div>
                </PhoneBreakpoint>
            </div>
        );
    }
}

export default PortfolioPage;