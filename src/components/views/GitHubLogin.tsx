import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { API_URL, GIT_CLIENT_ID, GIT_CLIENT_SECRET } from "../../configs/app";
import axios from "axios";
import GithubLoginBtn from "../../elements/GithubLoginBtn";
import { Spin } from "antd";
import ReactAnimatedEllipsis from "react-animated-ellipsis";
import useToastMessages from "../../hooks/useToastMessages";
import get from "lodash/get";

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

const ACCESS_TOKEN_URL = `https://github.com/login/oauth/access_token?client_id=${GIT_CLIENT_ID}&client_secret=${GIT_CLIENT_SECRET}`;

const convertGithubAccessToken = async (token) => {
  const result = await axios.post(
    `${API_URL}/auth/convert-token?grant_type=convert_token&client_id=${GIT_CLIENT_ID}&client_secret=${GIT_CLIENT_SECRET}&backend=github&token=${token}`
  );

  console.log(result.data);
};

const GitHubLogin = () => {
  const { search } = useLocation();
  const [loading, setLoading] = useState(false);
  const { error } = useToastMessages();

  const params = queryString.parse(search);
  const code = params?.code;
  const state = params?.state;

  const getGithubAccessToken = useCallback(
    async (code, state) => {
      try {
        const { data } = await axios.post(
          `${API_URL}/accounts/get-access-token`,
          {
            code,
            state,
          }
        );
        if (!data || data.error || !data.accessToken) {
          error("Error: " + get(data, "error_description", "Unable to login"));
          return { success: false };
        }
        return { success: true, accessToken: data.accessToken };
      } catch (e) {
        error("Error: Unable to login");
        return { success: false };
      }
    },
    [error]
  );

  const login = useCallback(
    async (code, state) => {
      const { success, accessToken } = await getGithubAccessToken(code, state);
      if (success && accessToken) {
        await convertGithubAccessToken(accessToken);
      }
    },
    [getGithubAccessToken]
  );

  useEffect(() => {
    if (code && state) {
      setLoading(true);
      // SET STATE MACHINE
    }
  }, [code, state, login]);

  return (
    <Wrapper>
      {loading ? (
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
