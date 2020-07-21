import React from "react";
import SideNavContainer from "../sideNav/SideNavContainer";
import SideNavElement from "../sideNav/SideNavElement";

interface IEditCVSideNav {
  activeKey: number;
  setActiveKey: (key: number) => void;
}

const TAB_DATA = new Map([
  [0, { label: "Basics" }],
  [1, { label: "Education" }],
  [2, { label: "Experience" }],
  [3, { label: "Personal Projects" }],
  [4, { label: "Skills" }],
]);

const EditCVSideNav = ({ activeKey, setActiveKey }: IEditCVSideNav) => {
  const onClickHandler = (key) => {
    setActiveKey(key);
  };

  return (
    <SideNavContainer>
      {Array.from(TAB_DATA.keys()).map((key: any) => (
        <SideNavElement
          active={activeKey === key}
          key={key}
          tabKey={key}
          onClickHandler={onClickHandler}
          label={TAB_DATA.get(key).label}
        />
      ))}
    </SideNavContainer>
  );
};

export default EditCVSideNav;
