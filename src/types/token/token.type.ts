export interface TokenRefreshResponse extends Response {
  data: string;
}
export interface NewAccessTokenResponse extends Response {
  data: {
    accessToken:string
  }
}
