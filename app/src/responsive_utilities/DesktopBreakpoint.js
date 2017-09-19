import React from 'react';
import Breakpoint from './Breakpoint';

const DesktopBreakpoint = (props) => {
    return (
    <Breakpoint name="desktop">
    {props.children}
    </Breakpoint>
    );
}

export default DesktopBreakpoint;
