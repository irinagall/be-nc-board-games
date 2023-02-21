const request = require("supertest");

const app = require("../app.js");

const db = require("../db/connection");

const seed = require("../db/seeds/seed.js");

const data = require("../db/data/test-data/index");

// closes the connection
afterAll(() => {
  db.end();
});

// seed the datatabase to reset the data before each test
beforeEach(() => {
  return seed(data);
});

describe("GET/api", () => {
  test("200: get a list of categories", async () => {
    return request(app)
      .get("/api/categories")
      .expect(200)
      .then((res) => {
        const categories = res.body;
        //console.log(res.body);
        expect(categories).toEqual([
          {
            slug: "euro game",
            description: "Abstact games that involve little luck",
          },
          {
            slug: "social deduction",
            description: "Players attempt to uncover each other's hidden role",
          },
          { slug: "dexterity", description: "Games involving physical skill" },
          {
            slug: "children's games",
            description: "Games suitable for children",
          },
        ]);
      });
  });
});
//const {}
