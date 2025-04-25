import { MockHandler } from "vite-plugin-mock-server";
import Mock from "mockjs";

const totalRecords = 234;

const mockData = Mock.mock({
  [`data|${totalRecords}`]: [
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
      const { currentPage = 1, pageSize = 20 } = req.query as {
        currentPage?: number;
        pageSize?: number;
      };

      const data = {
        code: 200,
        message: "success",
        data: {
          totalRecords: mockData.data.length,
          currentPage: currentPage,
          pageSize: pageSize,
          videoList: mockData.data.slice(
            (currentPage - 1) * pageSize,
            currentPage * pageSize
          ),
        },
      };
      res.end(JSON.stringify(data));
    },
  },
  {
    pattern: "/api/video/comment",
    handle: (req, res) => {
      const { currentPage, pageSize } = req.query as {
        currentPage?: number;
        pageSize?: number;
      };
      const mockCommentReply = () => {
        return Mock.mock({
          id: "@id",
          replyId: "",
          userId: "@id",
          userName: "@cname",
          userAvatar: '@image("100x100", "#50B347", "#FFF", "Mock")',
          content: "@cparagraph",
          likeCount: "@integer(0, 100)",
          createTime: "@datetime",
          isActive: false,
          "img|0-1": '@image("100x100", "#50B347", "#FFF", "@cname")',
        });
      };
      const mockComment = () => {
        const replies = Mock.mock({
          "array|1-5": [() => mockCommentReply()],
        }).array;

        return Mock.mock({
          id: "@id",
          userId: "@id",
          userName: "@cname",
          userAvatar: '@image("100x100", "#50B347", "#FFF", "Mock")',
          content: "@cparagraph",
          likeCount: "@integer(0, 100)",
          replyCount: replies.length,
          createTime: "@datetime",
          isActive: false,
          "img|0-1": '@image("100x100", "#50B347", "#FFF", "@cname")',
          replies,
        });
      };
      const mockData = Mock.mock({
        [`data|${pageSize}`]: {
          totalRecords: 10,
          currentPage: currentPage,
          pageSize: pageSize,
          [`comments|${pageSize}`]: [() => mockComment()],
        },
      });
      mockData.data.totalRecords =
        (currentPage || 1) * mockData.data.comments.length;
      mockData.data.comments.forEach((comment) => {
        const id = comment.id;
        comment.replies.forEach((reply) => {
          reply.replyId = id;
        });
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
