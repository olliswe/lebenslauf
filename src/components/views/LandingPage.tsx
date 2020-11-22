import React from 'react';
import CompleteModel from "../threejsModel/CompleteModel";
import MenuBar from "../menu/MenuBar";

const LandingPage = () => {
    return (
        <>
        <MenuBar/>
        <div style={{height:'30rem'}}>
            <CompleteModel/>
        </div>
            </>
    );
};

export default LandingPage;
