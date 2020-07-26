import React from "react";
import EditCVSideNav from "../editCv/EditCVSideNav";
import styled from "styled-components";
import Title from "../../elements/Title";
import EditCVBasic from "../editCv/EditCVBasic";
import EditCVEdu from "../editCv/EditCVEdu";
import EditCVWorkExp from "../editCv/EditCVWorkExp";
import EditCVSideProj from "../editCv/EditCVSideProj";
import EditCVSkills from "../editCv/EditCVSkills";
import CtaButton from "../../elements/CtaButton";
import { Route, Switch, Redirect } from "react-router-dom";

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

export const tabs = [
  { Component: EditCVBasic, path: "/cv/basics", label: "Basics" },
  { Component: EditCVEdu, path: "/cv/education", label: "Education" },
  { Component: EditCVWorkExp, path: "/cv/work", label: "Experience" },
  {
    Component: EditCVSideProj,
    path: "/cv/side-projects",
    label: "Personal Project",
  },
  { Component: EditCVSkills, path: "/cv/skills", label: "Skills" },
];

const EditCV = () => {
  return (
    <Wrapper>
      <EditCVSideNav />
      <Container>
        <TitleWrapper>
          <Title level={1}>EDIT CV</Title>
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
      <StyledButton>Save & Finish</StyledButton>
    </Wrapper>
  );
};

export default EditCV;
