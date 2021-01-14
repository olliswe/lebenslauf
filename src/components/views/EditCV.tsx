import React, { useCallback, useMemo } from "react";
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
import usePreviewCV from "src/hooks/usePreviewCV";
import CvPreview from "src/components/cvPreview/CvPreview";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  position: relative;
`;

const Content = styled.div`
  width: 100%;
  padding: 4rem 2rem 2rem 3rem;
`;

const TitleWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 2rem;
  display: flex;
  align-items: center;
`;

const StyledButton = styled(CtaButton)`
  font-size: 1rem;
  margin-right: 1rem;
  transform: translateY(5px);
`;

const EditCV = () => {
  useGetCV();
  const postCV = usePostCV();
  const { getPreviewCV } = usePreviewCV();
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

  const handlePreview = useCallback(async () => {
    //todo: add better error handling
    await postCV();
    await getPreviewCV();
  }, [getPreviewCV, postCV]);

  return (
    <Wrapper>
      <EditCVSideNav tabs={tabs} />
      <Container>
        <TitleWrapper>
          {isDisabled ? (
            <>
              <Tooltip
                title={"Please fill all required fields"}
                placement={"topLeft"}
              >
                <StyledButton isDisabled={true}>Preview</StyledButton>
              </Tooltip>
              <Tooltip
                title={"Please fill all required fields"}
                placement={"topLeft"}
              >
                <StyledButton isDisabled={true}>Save & Finish</StyledButton>
              </Tooltip>
            </>
          ) : (
            <>
              <StyledButton onClick={() => handlePreview()}>
                Preview
              </StyledButton>
              <StyledButton onClick={() => postCV()}>
                Save & Finish
              </StyledButton>
            </>
          )}
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
      <CvPreview />
    </Wrapper>
  );
};

export default EditCV;
