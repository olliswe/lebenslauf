import React from "react";
import styled from "styled-components";
import { GIT_CLIENT_ID } from "../../configs/app";
import GithubLoginBtn from "../../elements/GithubLoginBtn";
import { Spin } from "antd";
import ReactAnimatedEllipsis from "react-animated-ellipsis";
import useAuthState, { AuthStates } from "../../hooks/useAuthState";

const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const randomString = Math.random()
  .toString(36)
  .replace(/[^a-z]+/g, "")
  .substr(0, 10);

const LOGIN_URL = `https://github.com/login/oauth/authorize?client_id=${GIT_CLIENT_ID}&redirect_uri=http://localhost:3000/login&state=${randomString}`;

const GitHubLogin = () => {
  const authState = useAuthState((state) => state.authState);
  return (
    <Wrapper>
      {authState === AuthStates.loading ? (
        <>
          <Spin />
          <br />
          <div>
            &nbsp;&nbsp;&nbsp;Authenticating
            <ReactAnimatedEllipsis fontSize="1rem" spacing="0.05rem" />
          </div>
        </>
      ) : (
        <GithubLoginBtn href={LOGIN_URL} />
      )}
    </Wrapper>
  );
};

export default GitHubLogin;
