import React, { useMemo } from "react";
import EditCVSideNav from "../editCv/EditCVSideNav";
import styled from "styled-components";
import H1 from "../../elements/H1";
import EditCVBasic from "../editCv/EditCVBasic";
import EditCVEdu from "../editCv/EditCVEdu";
import EditCVWorkExp from "../editCv/EditCVWorkExp";
import EditCVSideProj from "../editCv/EditCVSideProj";
import EditCVSkills from "../editCv/EditCVSkills";
import CtaButton from "../../elements/CtaButton";
import { Redirect, Route, Switch } from "react-router-dom";
import useGetCV from "../../hooks/useGetCV";
import usePostCV from "../../hooks/usePostCV";
import useEducationEntries from "../../hooks/useEducationEntries";
import useExperienceEntries from "../../hooks/useExperienceEntries";
import usePersonalProjects from "../../hooks/usePersonalProjects";
import useCV from "../../stores/useCV";
import { Tooltip } from "antd";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
`;

const Content = styled.div`
  width: 100%;
  padding: 4rem 2rem 2rem 3rem;
`;

const TitleWrapper = styled.div`
  align-self: flex-end;
  margin-right: 2rem;
  height: 0px;
`;

const StyledButton = styled(CtaButton)`
  position: absolute;
  right: 5rem;
  bottom: 0rem;
  font-size: 1.5rem;
`;

const EditCV = () => {
  useGetCV();
  const postCV = usePostCV();
  const cv = useCV((state) => state.cv);

  const basicInvalid = !cv.name;
  const { isInvalid: educationInvalid } = useEducationEntries();
  const { isInvalid: experienceInvalid } = useExperienceEntries();
  const { isInvalid: projectsInvalid } = usePersonalProjects();

  const isDisabled =
    experienceInvalid || educationInvalid || projectsInvalid || basicInvalid;

  const tabs = useMemo(
    () => [
      {
        Component: EditCVBasic,
        path: "/cv/basics",
        label: "Basics",
        isInvalid: basicInvalid,
      },
      {
        Component: EditCVEdu,
        path: "/cv/education",
        label: "Education",
        isInvalid: educationInvalid,
      },
      {
        Component: EditCVWorkExp,
        path: "/cv/work",
        label: "Experience",
        isInvalid: experienceInvalid,
      },
      {
        Component: EditCVSideProj,
        path: "/cv/side-projects",
        label: "Personal Projects",
        isInvalid: projectsInvalid,
      },
      { Component: EditCVSkills, path: "/cv/skills", label: "Skills" },
    ],
    [basicInvalid, educationInvalid, experienceInvalid, projectsInvalid]
  );

  return (
    <Wrapper>
      <EditCVSideNav tabs={tabs} />
      <Container>
        <TitleWrapper>
          <H1>EDIT CV</H1>
        </TitleWrapper>
        <Content>
          <Switch>
            {tabs.map(({ Component, path }) => (
              <Route path={path} exact key={path} component={Component} />
            ))}
            <Redirect from={"/cv"} to={"/cv/basics"} />
          </Switch>
        </Content>
      </Container>
      {isDisabled ? (
        <Tooltip
          title={"Please fill all required fields"}
          placement={"topLeft"}
        >
          <StyledButton isDisabled={true}>Save & Finish</StyledButton>
        </Tooltip>
      ) : (
        <StyledButton onClick={() => postCV()}>Save & Finish</StyledButton>
      )}
    </Wrapper>
  );
};

export default EditCV;
