import React, { useState } from "react";
import EditCVSideNav from "../editCv/EditCVSideNav";
import styled from "styled-components";
import Title from "../../elements/Title";
import EditCVBasic from "../editCv/EditCVBasic";
import EditCVEdu from "../editCv/EditCVEdu";
import EditCVWorkExp from "../editCv/EditCVWorkExp";
import EditCVSideProj from "../editCv/EditCVSideProj";
import EditCVSkills from "../editCv/EditCVSkills";
import CtaButton from "../../elements/CtaButton";

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
  const [currentTab, setCurrentTab] = useState<number>(0);

  const tabs = [
    <EditCVBasic />,
    <EditCVEdu />,
    <EditCVWorkExp />,
    <EditCVSideProj />,
    <EditCVSkills />,
  ];

  return (
    <Wrapper>
      <EditCVSideNav activeKey={currentTab} setActiveKey={setCurrentTab} />
      <Container>
        <TitleWrapper>
          <Title level={1}>EDIT CV</Title>
        </TitleWrapper>
        <Content>{tabs[currentTab]}</Content>
      </Container>
      <StyledButton>Save & Finish</StyledButton>
    </Wrapper>
  );
};

export default EditCV;
