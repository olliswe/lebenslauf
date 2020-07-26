import React, { useCallback } from "react";
import SideNavContainer from "../sideNav/SideNavContainer";
import SideNavElement from "../sideNav/SideNavElement";
import { tabs } from "../views/EditCV";
import { useLocation, useHistory } from "react-router-dom";

const EditCVSideNav = () => {
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
      {tabs.map(({ label, path }: any) => (
        <SideNavElement
          active={path === pathname}
          key={path}
          tabKey={path}
          onClickHandler={onClickHandler}
          label={label}
        />
      ))}
    </SideNavContainer>
  );
};

export default EditCVSideNav;
