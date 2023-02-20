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

describe("GET/api/reviews", () => {
  test("expect to respond with a status code of 200 and an array of review listings", () => {
    return request(app)
      .get("/api/reviews")
      .expect(200)
      .then((res) => {
        const reviewListings = res.body;
        // console.log(reviewListings);
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
            comment_count: "0",
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
            comment_count: "0",
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
            comment_count: "0",
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
            comment_count: "0",
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
            comment_count: "3",
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
            comment_count: "3",
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
            comment_count: "0",
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
            comment_count: "0",
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
            comment_count: "0",
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
            comment_count: "0",
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
            comment_count: "0",
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
            comment_count: "0",
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
            comment_count: "0",
          },
        ]);
      });
  });
});
