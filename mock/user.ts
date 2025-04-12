import { MockHandler } from "vite-plugin-mock-server";

const user = [
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
        code: "200",
        message: "success",
        data: user,
      };
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(data));
    },
  },
];

export default mocks;
