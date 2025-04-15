export enum ErrorCode {
  SUCCESS = 200,
  ERROR = 500,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
}

export const getMessageInfo = (status: ErrorCode): string => {
  let msg = "";
  switch (status) {
    case ErrorCode.SUCCESS:
      msg = "请求成功(200)";
      break;
    case ErrorCode.FORBIDDEN:
      msg = "拒绝访问(403)";
      break;
    case ErrorCode.UNAUTHORIZED:
      msg = "未授权(401)";
      break;
    case ErrorCode.ERROR:
      msg = "服务器错误(500)";
      break;
    case ErrorCode.NOT_FOUND:
      msg = "资源未找到(404)";
      break;
    default:
      msg = `连接出错(${status})!`;
  }
  return msg;
};
