import { MockHandler } from "vite-plugin-mock-server";
import Mock from "mockjs";

const mocks: MockHandler[] = [
  {
    pattern: "/api/video/category",
    handle: (req, res) => {
      const mockData = Mock.mock({
        "data|10-20": [
          {
            name: "@cname",
            "list|1-10": ["@cname"],
          },
        ],
      });
      const data = {
        code: 200,
        message: "success",
        data: mockData.data,
      };
      res.end(JSON.stringify(data));
    },
  },
  {
    pattern: "/api/video/carousel",
    handle: (req, res) => {
      const mockData = Mock.mock({
        "data|1-5": [
          {
            img: Mock.Random.image("200x100", "#000", "#fff", "@cname"),
          },
        ],
      });
      const data = {
        code: 200,
        message: "success",
        data: mockData.data,
      };
      res.end(JSON.stringify(data));
    },
  },
  {
    pattern: "/api/video/recommend",
    handle: (req, res) => {
      const mockData = Mock.mock({
        "data|6": [
          {
            img: Mock.Random.image("200x100", "#000", "#fff", "@cname"),
            title: "@cname",
            createTime: "@date",
            user: {
              id: "@id",
              username: "@cname",
            },
          },
        ],
      });
      const data = {
        code: 200,
        message: "success",
        data: mockData.data,
      };
      res.end(JSON.stringify(data));
    },
  },
  {
    pattern: "/api/video/list",
    handle: (req, res) => {
      const mockData = Mock.mock({
        "data|10-20": [
          {
            img: Mock.Random.image("200x100", "#000", "#fff", "@cname"),
            title: "@cname",
            createTime: "@date",
            user: {
              id: "@id",
              username: "@cname",
            },
          },
        ],
      });
      const data = {
        code: 200,
        message: "success",
        data: mockData.data,
      };
      res.end(JSON.stringify(data));
    },
  },
];

export default mocks;
