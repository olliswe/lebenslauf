import React from "react";
import SideNavContainer from "../../elements/SideNavContainer";
import SideNavElement from "../../elements/SideNavElement";
import { ProfileTabs } from "../views/EditCV";

const EditCVSideNav = () => {
  return (
    <SideNavContainer>
      <SideNavElement
        active={true}
        key={ProfileTabs.INTRODUCTION}
        onClick={() => {}}
      />
    </SideNavContainer>
  );
};

export default EditCVSideNav;
