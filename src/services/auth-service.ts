import QueryString from "qs";
import { CredentialsDTO } from "../models/auth";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";
import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";
import * as acesstokenRepository from "../localStorage/acess-token-repository";

export function loginRequest(loginData: CredentialsDTO) {
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET),
  };

  const requestBody = QueryString.stringify({
    ...loginData,
    grant_type: "password",
  }); //converter JSON em www-form-urlencoded

  const config: AxiosRequestConfig = {
    method: "POST",
    url: "/oauth/token",
    data: requestBody,
    headers: headers,
  };

  return requestBackend(config);
}

export function logout() {
  acesstokenRepository.remove();
}

export function saveAcessToken(token: string) {
  acesstokenRepository.save(token);
}

export function getAcessToken() {
  acesstokenRepository.get();
}
