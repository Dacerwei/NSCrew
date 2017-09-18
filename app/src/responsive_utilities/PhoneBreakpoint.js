import React from 'react';
import Breakpoint from './Breakpoint';

const PhoneBreakpoint = (props) => {
    return (
        <Breakpoint name="phone">
        {props.children}
        </Breakpoint>
    );
}
export default PhoneBreakpoint;
