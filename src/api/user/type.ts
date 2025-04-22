export interface baseResponse {
  code: number;
  message: string;
}

export interface loginRequest {
  username: string;
  password: string;
}

export interface loginResponse extends baseResponse {
  data: {
    username: string;
    token: string;
  };
}

export interface userInfoResponse extends baseResponse {
  data: {
    userId: string;
    username: string;
    avatar: string;
  };
}

export interface logoutResponse extends baseResponse {}
