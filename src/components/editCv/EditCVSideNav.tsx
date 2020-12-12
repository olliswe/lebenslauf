import React, { useCallback } from "react";
import SideNavContainer from "../sideNav/SideNavContainer";
import SideNavElement from "../sideNav/SideNavElement";
import { useHistory, useLocation } from "react-router-dom";

const EditCVSideNav = ({ tabs }: { tabs: any }) => {
  const { pathname } = useLocation();
  const history = useHistory();

  const onClickHandler = useCallback(
    (tabKey) => {
      history.push(tabKey);
    },
    [history]
  );

  return (
    <SideNavContainer>
      {tabs.map(({ label, path, isInvalid }: any) => (
        <SideNavElement
          active={path === pathname}
          key={path}
          tabKey={path}
          onClickHandler={onClickHandler}
          label={label}
          error={isInvalid}
        />
      ))}
    </SideNavContainer>
  );
};

export default EditCVSideNav;
