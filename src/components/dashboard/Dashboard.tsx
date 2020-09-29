import React from "react";
import H1 from "../../elements/H1";
import styled from "styled-components";
import CtaButton from "../../elements/CtaButton";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  padding: 0rem 2rem;
`;

const CTARow = styled.div`
  width: 100%;
  margin-top: 10rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const StyledButton = styled(CtaButton)`
  width: 10rem;
`;

const Dashboard = () => {
  return (
    <Wrapper>
      <H1>Hello Oliver!</H1>
      <CTARow>
        <StyledButton>Download your CV</StyledButton>
        <Link to="/cv">
          <StyledButton>Edit your CV</StyledButton>
        </Link>
      </CTARow>
    </Wrapper>
  );
};

export default Dashboard;
