import React from 'react';
import { 
          authActionState, 
          authIsAuthenticateState, 
          authAccessTokenState, 
          authReturnDataState
        } from '../states/UserStates';
import { useRecoilState, useRecoilValue } from 'recoil';
import { http } from '../network/http';

export const useAuth = () => {
  const [authAction, setAuthAction] = useRecoilState(authActionState);
  const [authIsAuthenticate, setAuthIsAuthenticate] = useRecoilState(authIsAuthenticateState);
  const [authAccessToken, setAuthAccessToken] = useRecoilState(authAccessTokenState);
  const [authReturnData, setAuthReturnData] = useRecoilState(authReturnDataState);

  const authorize = async (acessToken) => {
    localStorage.setItem("accessToken", acessToken);
    try {
      await me();
    } catch (error) {
      console.log(error);
    }
  }

  const login = async (data) => {
    try {
      // const res = await http.post("/auth/login", data);
      // const token = res.data?.result?.accessToken;
      const token = "";
      authorize(token);
    } catch (error) {
      console.log(error);
    }
  } 

  const me = async () => {
    const accessToken = localStorage.getItem("accessToken");
    http.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

    try {
      // const response = await http.post("/auth/me");
      setAuthIsAuthenticate(true);
      setAuthAccessToken(accessToken);
      // setAuthReturnData(response.data);
    } catch(error) {
      
      return 
    }
  }

  return {
    login,
  }

}