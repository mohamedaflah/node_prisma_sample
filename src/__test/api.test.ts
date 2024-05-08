import request from "supertest";
import app from "../app";

describe("GET /api/post", () => {
  it("should response with 200 and return an array of posts", async () => {
    const response = await request(app).get(`/api/post`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.any(Object));
  });
});

describe("POST /api/post", () => {
  it("should response with 200 status code and return json object including new added post", async () => {
    const response = await request(app).post(`/api/post`).send({
      title: "New Release second",
      content: "film new Release second in Hotstarhttp://localhost:2500/post",
    });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("data");
  });
});

describe("GET /api/post/:postId", () => {
  it("should response with status code of 200 and return a json with including post", async () => {
    const response = await request(app).get(`/api/post/${1}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("post");
  });
});
