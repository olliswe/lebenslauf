import React from 'react';
import {Link as RRLink} from 'react-router-dom'
import {Typography} from "antd";

const Link = (props) => {
    return (
        <RRLink component={Typography.Link }{...props}/>
    );
};

export default Link;
