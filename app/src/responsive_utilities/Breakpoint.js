import React from 'react';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';

const breakpoints = {
    desktop: `(min-width: 1025px)`,
    tablet: `(min-width: 768px) and (max-width: 1024px)`,
    phone: `(max-width: 767px)`,
};

export default class Breakpoint extends React.Component {
    constructor(props) {
        super(props);
    }  
    render() {
        const {
            name,
            children,
        } = this.props;

        let breakpoint = breakpoints[name] || breakpoints.desktop;

        return (
            <MediaQuery {...this.props} query={breakpoint}>
            {this.props.children}
            </MediaQuery>
        );
    }

}

Breakpoint.propTypes = {
    name: PropTypes.string,
    children: PropTypes.node,
};

