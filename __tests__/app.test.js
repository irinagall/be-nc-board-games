const request = require("supertest");

const app = require("../app.js");

const db = require("../db/connection");

const seed = require("../db/seeds/seed.js");

const data = require("../db/data/test-data/index");

beforeEach(() => {
  return seed(data);
});

afterAll(() => {
  return db.end();
});

describe("GET/api/categories", () => {
  test("expect to respond with a status code 200 and a list of categories", async () => {
    return request(app)
      .get("/api/categories")
      .expect(200)
      .then((res) => {
        const categories = res.body;
        expect(categories).toEqual([
          {
            slug: "euro game",
            description: "Abstact games that involve little luck",
          },
          {
            slug: "social deduction",
            description: "Players attempt to uncover each other's hidden role",
          },
          {
            slug: "dexterity",
            description: "Games involving physical skill",
          },
          {
            slug: "children's games",
            description: "Games suitable for children",
          },
        ]);
      });
  });
});

describe("GET/api/reviews", () => {
  test("expect to respond with a status code of 200 and an array of review listings", () => {
    return request(app)
      .get("/api/reviews")
      .expect(200)
      .then((res) => {
        const reviewListings = res.body;
        expect(reviewListings).toEqual([
          {
            owner: "mallionaire",
            title: "Mollit elit qui incididunt veniam occaecat cupidatat",
            review_id: 7,
            category: "social deduction",
            review_img_url:
              "https://images.pexels.com/photos/776657/pexels-photo-776657.jpeg?w=700&h=700",
            created_at: "2021-01-25T11:16:54.963Z",
            votes: 9,
            designer: "Avery Wunzboogerz",
            comment_count: 0,
          },
          {
            owner: "mallionaire",
            title: "Dolor reprehenderit",
            review_id: 4,
            category: "social deduction",
            review_img_url:
              "https://images.pexels.com/photos/278918/pexels-photo-278918.jpeg?w=700&h=700",
            created_at: "2021-01-22T11:35:50.936Z",
            votes: 7,
            designer: "Gamey McGameface",
            comment_count: 0,
          },
          {
            owner: "mallionaire",
            title: "Scythe; you're gonna need a bigger table!",
            review_id: 12,
            category: "social deduction",
            review_img_url:
              "https://images.pexels.com/photos/4200740/pexels-photo-4200740.jpeg?w=700&h=700",
            created_at: "2021-01-22T10:37:04.839Z",
            votes: 100,
            designer: "Jamey Stegmaier",
            comment_count: 0,
          },
          {
            owner: "mallionaire",
            title: "Build you own tour de Yorkshire",
            review_id: 10,
            category: "social deduction",
            review_img_url:
              "https://images.pexels.com/photos/258045/pexels-photo-258045.jpeg?w=700&h=700",
            created_at: "2021-01-18T10:01:41.251Z",
            votes: 10,
            designer: "Asger Harding Granerud",
            comment_count: 0,
          },
          {
            owner: "bainesface",
            title: "Ultimate Werewolf",
            review_id: 3,
            category: "social deduction",
            review_img_url:
              "https://images.pexels.com/photos/5350049/pexels-photo-5350049.jpeg?w=700&h=700",
            created_at: "2021-01-18T10:01:41.251Z",
            votes: 5,
            designer: "Akihisa Okui",
            comment_count: 3,
          },
          {
            owner: "philippaclaire9",
            title: "Jenga",
            review_id: 2,
            category: "dexterity",
            review_img_url:
              "https://images.pexels.com/photos/4473494/pexels-photo-4473494.jpeg?w=700&h=700",
            created_at: "2021-01-18T10:01:41.251Z",
            votes: 5,
            designer: "Leslie Scott",
            comment_count: 3,
          },
          {
            owner: "mallionaire",
            title: "A truly Quacking Game; Quacks of Quedlinburg",
            review_id: 9,
            category: "social deduction",
            review_img_url:
              "https://images.pexels.com/photos/279321/pexels-photo-279321.jpeg?w=700&h=700",
            created_at: "2021-01-18T10:01:41.251Z",
            votes: 10,
            designer: "Wolfgang Warsch",
            comment_count: 0,
          },
          {
            owner: "mallionaire",
            title: "That's just what an evil person would say!",
            review_id: 11,
            category: "social deduction",
            review_img_url:
              "https://images.pexels.com/photos/220057/pexels-photo-220057.jpeg?w=700&h=700",
            created_at: "2021-01-18T10:01:41.251Z",
            votes: 8,
            designer: "Fiona Lohoar",
            comment_count: 0,
          },
          {
            owner: "mallionaire",
            title: "One Night Ultimate Werewolf",
            review_id: 8,
            category: "social deduction",
            review_img_url:
              "https://images.pexels.com/photos/5350049/pexels-photo-5350049.jpeg?w=700&h=700",
            created_at: "2021-01-18T10:01:41.251Z",
            votes: 5,
            designer: "Akihisa Okui",
            comment_count: 0,
          },
          {
            owner: "mallionaire",
            title: "Agricola",
            review_id: 1,
            category: "euro game",
            review_img_url:
              "https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?w=700&h=700",
            created_at: "2021-01-18T10:00:20.514Z",
            votes: 1,
            designer: "Uwe Rosenberg",
            comment_count: 0,
          },
          {
            owner: "mallionaire",
            title: "Proident tempor et.",
            review_id: 5,
            category: "social deduction",
            review_img_url:
              "https://images.pexels.com/photos/209728/pexels-photo-209728.jpeg?w=700&h=700",
            created_at: "2021-01-07T09:06:08.077Z",
            votes: 5,
            designer: "Seymour Buttz",
            comment_count: 0,
          },
          {
            owner: "mallionaire",
            title: "Occaecat consequat officia in quis commodo.",
            review_id: 6,
            category: "social deduction",
            review_img_url:
              "https://images.pexels.com/photos/207924/pexels-photo-207924.jpeg?w=700&h=700",
            created_at: "2020-09-13T14:19:28.077Z",
            votes: 8,
            designer: "Ollie Tabooger",
            comment_count: 0,
          },
          {
            owner: "mallionaire",
            title: "Settlers of Catan: Don't Settle For Less",
            review_id: 13,
            category: "social deduction",
            review_img_url:
              "https://images.pexels.com/photos/1153929/pexels-photo-1153929.jpeg?w=700&h=700",
            created_at: "1970-01-10T02:08:38.400Z",
            votes: 16,
            designer: "Klaus Teuber",
            comment_count: 0,
          },
        ]);
      });
  });
});

describe("GET/api/reviews/:review_id", () => {
  test("expect to respond with a review", () => {
    return request(app)
      .get("/api/reviews/4")
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual({
          review: {
            review_id: 4,
            title: "Dolor reprehenderit",
            review_body:
              "Consequat velit occaecat voluptate do. Dolor pariatur fugiat sint et proident ex do consequat est. Nisi minim laboris mollit cupidatat et adipisicing laborum do. Sint sit tempor officia pariatur duis ullamco labore ipsum nisi voluptate nulla eu veniam. Et do ad id dolore id cillum non non culpa. Cillum mollit dolor dolore excepteur aliquip. Cillum aliquip quis aute enim anim ex laborum officia. Aliqua magna elit reprehenderit Lorem elit non laboris irure qui aliquip ad proident. Qui enim mollit Lorem labore eiusmod",
            designer: "Gamey McGameface",
            review_img_url:
              "https://images.pexels.com/photos/278918/pexels-photo-278918.jpeg?w=700&h=700",
            votes: 7,
            category: "social deduction",
            owner: "mallionaire",
            created_at: "2021-01-22T11:35:50.936Z",
          },
        });
      });
  });

  test("expect to respond with a message when review id is valid but it does not exist", () => {
    return request(app)
      .get("/api/reviews/4000")
      .expect(404)
      .then((res) => {
        expect(res.body).toEqual({ message: "No such review" });
      });
  });
  test("400:expect to respond with an error for an invalid request", () => {
    return request(app).get("/api/reviews/nonsense/").expect(400);
  });
});

describe("GET/api/reviews/:review_id/comments", () => {
  test("expect to respond with an array of comments for the given review_id", () => {
    return request(app)
      .get("/api/reviews/2/comments")
      .expect(200)
      .then(({ body }) => {
        expect(body.comments).toEqual([
          {
            comment_id: 4,
            votes: 16,
            created_at: "2017-11-22T12:36:03.389Z",
            review_id: 2,
            author: "bainesface",
            body: "EPIC board game!",
          },
          {
            comment_id: 1,
            votes: 16,
            created_at: "2017-11-22T12:43:33.389Z",
            review_id: 2,
            author: "bainesface",
            body: "I loved this game too!",
          },
          {
            comment_id: 5,
            votes: 13,
            created_at: "2021-01-18T10:24:05.410Z",
            review_id: 2,
            author: "mallionaire",
            body: "Now this is a story all about how, board games turned my life upside down",
          },
        ]);
      });
  });

  test("expect to respond with an empty list for a valid but nonexistent review_id", () => {
    return request(app)
      .get("/api/reviews/1/comments")
      .expect(200)
      .then(({ body }) => {
        expect(body.comments).toEqual([]);
      });
  });

  test("400:expect to respond with an error for an invalid request", () => {
    return request(app).get("/api/reviews/nonsense/comments").expect(400);
  });
});

describe("POST /api/reviews/:review_id/comments", () => {
  test("expect to respond with a new comment", () => {
    const newComment = {
      username: "bainesface",
      body: "My cat loved this game too",
    };
    return request(app)
      .post("/api/reviews/1/comments")
      .send(newComment)
      .expect(201)
      .then(({ body }) => {
        expect(body.comment).toEqual({
          author: "bainesface",
          body: "My cat loved this game too",
          votes: 0,
          comment_id: 7,
          review_id: 1,
          created_at: expect.any(String),
        });
      });
  });

  test("expect to post the comment even when the object takes an unecessary extra key", () => {
    const newComment = {
      username: "bainesface",
      body: "My cat loved this game too",
      nonesense: "this-comment-should-still-post",
    };
    return request(app)
      .post("/api/reviews/1/comments")
      .send(newComment)
      .expect(201)
      .then(({ body }) => {
        expect(body.comment).toEqual({
          author: "bainesface",
          body: "My cat loved this game too",
          votes: 0,
          comment_id: 7,
          review_id: 1,
          created_at: expect.any(String),
        });
      });
  });

  test("400:expect to respond with an error when trying to post an empty comment", () => {
    const newComment = {
      username: "bainesface",
    };
    return request(app)
      .post("/api/reviews/1/comments")
      .send(newComment)
      .expect(400);
  });

  test("404: expect to respond with a message when review id is valid but it does not exist", () => {
    const newComment = {
      username: "happytoofo",
      body: "My cat loved this game too",
    };
    return request(app)
      .post("/api/reviews/4000/comments")
      .send(newComment)
      .expect(404)
      .then((res) => {
        expect(res.body).toEqual({ message: "Not found" });
      });
  });

  test("404: expect to respond with an error when username is valid but it does not exist", () => {
    const newComment = {
      username: "happytoofo",
      body: "My cat loved this game too",
    };
    return request(app)
      .post("/api/reviews/1/comments")
      .send(newComment)
      .expect(404)
      .then((res) => {
        expect(res.body).toEqual({ message: "Not found" });
      });
  });
});

describe("404 error handler", () => {
  test("404: expect an 404 response code when endpoint not found", () => {
    return request(app)
      .get("/api/notfound")
      .expect(404)
      .then(({ text }) => {
        expect(text).toBe("Not Found");
      });
  });
});
