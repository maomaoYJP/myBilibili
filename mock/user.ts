import { MockHandler } from "vite-plugin-mock-server";

const users = [
  {
    userId: 1,
    avatar:
      "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
    username: "admin",
    password: "123456",
    token: "123456",
  },
  {
    userId: 2,
    avatar:
      "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
    username: "system",
    password: "123456",
    token: "123456",
  },
];

const mocks: MockHandler[] = [
  {
    pattern: "/api/login",
    handle: (req, res) => {
      const data = {
        code: 200,
        message: "success",
        data: {
          username: users[0].username,
          token: users[0].token,
        },
      };
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(data));
    },
  },
  {
    pattern: "/api/userinfo",
    handle: (req, res) => {
      const token = req.headers.authorization;
      const user = users.find((item) => item.token === token);
      const data = {
        code: 200,
        message: "success",
        data: {
          username: user?.username,
          avatar: user?.avatar,
        },
      };
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(data));
    },
  },
  {
    pattern: "/api/logout",
    handle: (req, res) => {
      res.end(JSON.stringify({ code: 200, message: "success" }));
    },
  },
];

export default mocks;
