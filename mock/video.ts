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
  {
    pattern: "/api/video/comment",
    handle: (req, res) => {
      const { currentPage, pageSize } = req.query as {
        currentPage?: string;
        pageSize?: string;
      };
      const mockCommentReply = () => {
        return Mock.mock({
          replyId: "@id",
          replyUserId: "@id",
          replyUserName: "@cname",
          replyUserAvatar: '@image("100x100", "#50B347", "#FFF", "Mock")',
          replyContent: "@cparagraph",
          replyLikeCount: "@integer(0, 100)",
          replyCreateTime: "@datetime",
        });
      };
      const mockComment = () => {
        const replies = Mock.mock({
          "array|1-5": [() => mockCommentReply()],
        }).array;

        return Mock.mock({
          commentId: "@id",
          userId: "@id",
          userName: "@cname",
          userAvatar: '@image("100x100", "#50B347", "#FFF", "Mock")',
          content: "@cparagraph",
          likeCount: "@integer(0, 100)",
          replyCount: replies.length,
          createTime: "@datetime",
          replies,
        });
      };
      const mockData = Mock.mock({
        [`data|${pageSize}`]: [mockComment()],
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
