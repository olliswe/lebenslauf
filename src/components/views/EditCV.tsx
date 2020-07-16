import React, { useState } from "react";
import SideNavContainer from "../../elements/SideNavContainer";
import EditCVSideNav from "../editCv/EditCVSideNav";

export enum ProfileTabs {
  INTRODUCTION,
  LINKS,
  EDUCATION,
  WORK_EXPERIENCE,
  PERSONAL_PROJECTS,
  SKILLS,
  ADDITIONAL,
}

const {
  INTRODUCTION,
  LINKS,
  EDUCATION,
  WORK_EXPERIENCE,
  PERSONAL_PROJECTS,
  SKILLS,
  ADDITIONAL,
} = ProfileTabs;

const EditCV = () => {
  const [currentTab, setCurrentTab] = useState(INTRODUCTION);

  return <EditCVSideNav />;
};

export default EditCV;
