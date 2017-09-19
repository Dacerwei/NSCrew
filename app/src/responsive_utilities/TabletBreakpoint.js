import React from 'react';
import Breakpoint from './Breakpoint';

const TabletBreakpoint = (props) => {
    return (
        <Breakpoint name="tablet">
        {props.children}
        </Breakpoint>
    );
}

export default TabletBreakpoint;