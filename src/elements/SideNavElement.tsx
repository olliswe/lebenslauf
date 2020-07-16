import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: block;
  height: 10rem;
  background: white;
  box-shadow: 0 5px 5px -5px rgba(0, 0, 0, 0.5);
`;

const SideNavElement = ({ active, key, onClick }) => {
  return <Wrapper></Wrapper>;
};

export default SideNavElement;
