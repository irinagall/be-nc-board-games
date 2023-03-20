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
            review_body:
              "Consectetur incididunt aliquip sunt officia. Magna ex nulla consectetur laboris incididunt ea non qui. Enim id eiusmod irure dolor ipsum in tempor consequat amet ullamco. Occaecat fugiat sint fugiat mollit consequat pariatur consequat non exercitation dolore. Labore occaecat in magna commodo anim enim eiusmod eu pariatur ad duis magna. Voluptate ad et dolore ullamco anim sunt do. Qui exercitation tempor in in minim ullamco fugiat ipsum. Duis irure voluptate cupidatat do id mollit veniam culpa. Velit deserunt exercitation amet laborum nostrud dolore in occaecat minim amet nostrud sunt in. Veniam ut aliqua incididunt commodo sint in anim duis id commodo voluptate sit quis.",
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
            review_body:
              "Consequat velit occaecat voluptate do. Dolor pariatur fugiat sint et proident ex do consequat est. Nisi minim laboris mollit cupidatat et adipisicing laborum do. Sint sit tempor officia pariatur duis ullamco labore ipsum nisi voluptate nulla eu veniam. Et do ad id dolore id cillum non non culpa. Cillum mollit dolor dolore excepteur aliquip. Cillum aliquip quis aute enim anim ex laborum officia. Aliqua magna elit reprehenderit Lorem elit non laboris irure qui aliquip ad proident. Qui enim mollit Lorem labore eiusmod",
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
            review_body:
              "Spend 30 minutes just setting up all of the boards (!) meeple and decks, just to forget how to play. Scythe can be a lengthy game but really packs a punch if you put the time in. With beautiful artwork, countless scenarios and clever game mechanics, this board game is a must for any board game fanatic; just make sure you explain ALL the rules before you start playing with first timers or you may find they bring it up again and again.",
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
            review_body:
              "Cold rain pours on the faces of your team of cyclists, you pulled to the front of the pack early and now your taking on exhaustion cards like there is not tomorrow, you think there are about 2 hands left until you cross the finish line, will you draw enough from your deck to cross before the other team shoot passed? Flamee Rouge is a Racing deck management game where you carefully manage your deck in order to cross the line before your opponents, cyclist can fall slyly behind front runners in their slipstreams to save precious energy for the prefect moment to burst into the lead ",
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
            review_body: "We couldn't find the werewolf!",
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
            review_body: "Fiddly fun for all the family",
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
            review_body:
              "Ever wish you could try your hand at mixing potions? Quacks of Quedlinburg will have you mixing up a homebrew like no other. Each player buys different ingredients (chips) that are drawn at random to reach the most points, but watch out, you'd better not let your cauldrom explode.",
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
            review_body:
              "If you've ever wanted to accuse your siblings, cousins or friends of being part of a plot to murder everyone whilst secretly choosing which one of them should get the chop next - this is the boardgame for you. Buyer beware: once you gain a reputation for being able to lie with a stone face about being the secret killer you may never lose it.",
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
            review_body: "We couldn't find the werewolf!",
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
            review_body: "Farmyard fun!",
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
            review_body:
              "Labore occaecat sunt qui commodo anim anim aliqua adipisicing aliquip fugiat. Ad in ipsum incididunt esse amet deserunt aliqua exercitation occaecat nostrud irure labore ipsum. Culpa tempor non voluptate reprehenderit deserunt pariatur cupidatat aliqua adipisicing. Nostrud labore dolor fugiat sint consequat excepteur dolore irure eu. Anim ex adipisicing magna deserunt enim fugiat do nulla officia sint. Ex tempor ut aliquip exercitation eiusmod. Excepteur deserunt officia voluptate sunt aliqua esse deserunt velit. In id non proident veniam ipsum id in consequat duis ipsum et incididunt. Qui cupidatat ea deserunt magna proident nisi nulla eiusmod aliquip magna deserunt fugiat fugiat incididunt. Laboris nisi velit mollit ullamco deserunt eiusmod deserunt ea dolore veniam.",
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
            review_body:
              "Fugiat fugiat enim officia laborum quis. Aliquip laboris non nulla nostrud magna exercitation in ullamco aute laborum cillum nisi sint. Culpa excepteur aute cillum minim magna fugiat culpa adipisicing eiusmod laborum ipsum fugiat quis. Mollit consectetur amet sunt ex amet tempor magna consequat dolore cillum adipisicing. Proident est sunt amet ipsum magna proident fugiat deserunt mollit officia magna ea pariatur. Ullamco proident in nostrud pariatur. Minim consequat pariatur id pariatur adipisicing.",
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
            review_body:
              "You have stumbled across an uncharted island rich in natural resources, but you are not alone; other adventurers have come ashore too, and the race to settle the island of Catan has begun! Whether you exert military force, build a road to rival the Great Wall, trade goods with ships from the outside world, or some combination of all three, the aim is the same: to dominate the island. Will you prevail? Proceed strategically, trade wisely, and may the odds be in favour.",
          },
        ]);
      });
  });
});

describe("GET/api/reviews/:review_id", () => {
  test("expect to respond with a review", () => {
    return request(app)
      .get("/api/reviews/3")
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual({
          review: {
            owner: "bainesface",
            title: "Ultimate Werewolf",
            review_body: "We couldn't find the werewolf!",
            review_id: 3,
            category: "social deduction",
            review_img_url:
              "https://images.pexels.com/photos/5350049/pexels-photo-5350049.jpeg?w=700&h=700",
            created_at: "2021-01-18T10:01:41.251Z",
            votes: 5,
            designer: "Akihisa Okui",
            comment_count: 3,
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

describe("PATCH /api/reviews/:review_id", () => {
  test("given a review id and votes count object should update the votes and respond with the updated review", () => {
    const newVotesCount = { inc_votes: 2 };
    return request(app)
      .patch("/api/reviews/3")
      .send(newVotesCount)
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual({
          review: {
            title: "Ultimate Werewolf",
            review_id: 3,
            designer: "Akihisa Okui",
            owner: "bainesface",
            review_img_url:
              "https://images.pexels.com/photos/5350049/pexels-photo-5350049.jpeg?w=700&h=700",
            review_body: "We couldn't find the werewolf!",
            category: "social deduction",
            created_at: expect.any(String),
            votes: 7,
          },
        });
      });
  });

  test("given a review id and a negative votes count object should update the votes and respond with the updated review", () => {
    const newVotesCount = { inc_votes: -2 };
    return request(app)
      .patch("/api/reviews/3")
      .send(newVotesCount)
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual({
          review: {
            title: "Ultimate Werewolf",
            review_id: 3,
            designer: "Akihisa Okui",
            owner: "bainesface",
            review_img_url:
              "https://images.pexels.com/photos/5350049/pexels-photo-5350049.jpeg?w=700&h=700",
            review_body: "We couldn't find the werewolf!",
            category: "social deduction",
            created_at: expect.any(String),
            votes: 3,
          },
        });
      });
  });

  test("404:given a review id and a negative votes count object should update the votes and respond with the updated review", () => {
    const newVotesCount = { inc_votes: -2 };
    return request(app)
      .patch("/api/reviews/99")
      .send(newVotesCount)
      .expect(404)
      .then((res) => {
        expect(res.body).toEqual({});
      });
  });

  test("400:given an empty request body it should respond with a 400 status code", () => {
    return request(app).patch("/api/reviews/4").send({}).expect(400);
  });

  test("400:given a non integer review id expect 400 status code", () => {
    const newVotesCount = { inc_votes: -2 };
    return request(app)
      .patch("/api/reviews/four")
      .send(newVotesCount)
      .expect(400);
  });
});

describe("GET /api/users", () => {
  test("expect to respond with a list of users", () => {
    return request(app)
      .get("/api/users")
      .expect(200)
      .then(({ body }) => {
        expect(body).toEqual({
          users: [
            {
              username: "dav3rid",
              name: "dave",
              avatar_url:
                "https://www.golenbock.com/wp-content/uploads/2015/01/placeholder-user.png",
            },
            {
              username: "mallionaire",
              name: "haz",
              avatar_url:
                "https://www.healthytherapies.com/wp-content/uploads/2016/06/Lime3.jpg",
            },
            {
              username: "philippaclaire9",
              name: "philippa",
              avatar_url:
                "https://avatars2.githubusercontent.com/u/24604688?s=460&v=4",
            },
            {
              username: "bainesface",
              name: "sarah",
              avatar_url:
                "https://avatars2.githubusercontent.com/u/24394918?s=400&v=4",
            },
          ],
        });
      });
  });
});

describe("GET /api/reviews(queries)", () => {
  test("expect all reviews by category by default sorting", () => {
    return request(app)
      .get("/api/reviews?category=social%20deduction")
      .expect(200)
      .then(({ body }) => {
        expect(body).toEqual([
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
            review_body:
              "Consectetur incididunt aliquip sunt officia. Magna ex nulla consectetur laboris incididunt ea non qui. Enim id eiusmod irure dolor ipsum in tempor consequat amet ullamco. Occaecat fugiat sint fugiat mollit consequat pariatur consequat non exercitation dolore. Labore occaecat in magna commodo anim enim eiusmod eu pariatur ad duis magna. Voluptate ad et dolore ullamco anim sunt do. Qui exercitation tempor in in minim ullamco fugiat ipsum. Duis irure voluptate cupidatat do id mollit veniam culpa. Velit deserunt exercitation amet laborum nostrud dolore in occaecat minim amet nostrud sunt in. Veniam ut aliqua incididunt commodo sint in anim duis id commodo voluptate sit quis.",
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
            review_body:
              "Consequat velit occaecat voluptate do. Dolor pariatur fugiat sint et proident ex do consequat est. Nisi minim laboris mollit cupidatat et adipisicing laborum do. Sint sit tempor officia pariatur duis ullamco labore ipsum nisi voluptate nulla eu veniam. Et do ad id dolore id cillum non non culpa. Cillum mollit dolor dolore excepteur aliquip. Cillum aliquip quis aute enim anim ex laborum officia. Aliqua magna elit reprehenderit Lorem elit non laboris irure qui aliquip ad proident. Qui enim mollit Lorem labore eiusmod",
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
            review_body:
              "Spend 30 minutes just setting up all of the boards (!) meeple and decks, just to forget how to play. Scythe can be a lengthy game but really packs a punch if you put the time in. With beautiful artwork, countless scenarios and clever game mechanics, this board game is a must for any board game fanatic; just make sure you explain ALL the rules before you start playing with first timers or you may find they bring it up again and again.",
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
            review_body: "We couldn't find the werewolf!",
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
            review_body:
              "Ever wish you could try your hand at mixing potions? Quacks of Quedlinburg will have you mixing up a homebrew like no other. Each player buys different ingredients (chips) that are drawn at random to reach the most points, but watch out, you'd better not let your cauldrom explode.",
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
            review_body:
              "Cold rain pours on the faces of your team of cyclists, you pulled to the front of the pack early and now your taking on exhaustion cards like there is not tomorrow, you think there are about 2 hands left until you cross the finish line, will you draw enough from your deck to cross before the other team shoot passed? Flamee Rouge is a Racing deck management game where you carefully manage your deck in order to cross the line before your opponents, cyclist can fall slyly behind front runners in their slipstreams to save precious energy for the prefect moment to burst into the lead ",
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
            review_body:
              "If you've ever wanted to accuse your siblings, cousins or friends of being part of a plot to murder everyone whilst secretly choosing which one of them should get the chop next - this is the boardgame for you. Buyer beware: once you gain a reputation for being able to lie with a stone face about being the secret killer you may never lose it.",
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
            review_body: "We couldn't find the werewolf!",
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
            review_body:
              "Labore occaecat sunt qui commodo anim anim aliqua adipisicing aliquip fugiat. Ad in ipsum incididunt esse amet deserunt aliqua exercitation occaecat nostrud irure labore ipsum. Culpa tempor non voluptate reprehenderit deserunt pariatur cupidatat aliqua adipisicing. Nostrud labore dolor fugiat sint consequat excepteur dolore irure eu. Anim ex adipisicing magna deserunt enim fugiat do nulla officia sint. Ex tempor ut aliquip exercitation eiusmod. Excepteur deserunt officia voluptate sunt aliqua esse deserunt velit. In id non proident veniam ipsum id in consequat duis ipsum et incididunt. Qui cupidatat ea deserunt magna proident nisi nulla eiusmod aliquip magna deserunt fugiat fugiat incididunt. Laboris nisi velit mollit ullamco deserunt eiusmod deserunt ea dolore veniam.",
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
            review_body:
              "Fugiat fugiat enim officia laborum quis. Aliquip laboris non nulla nostrud magna exercitation in ullamco aute laborum cillum nisi sint. Culpa excepteur aute cillum minim magna fugiat culpa adipisicing eiusmod laborum ipsum fugiat quis. Mollit consectetur amet sunt ex amet tempor magna consequat dolore cillum adipisicing. Proident est sunt amet ipsum magna proident fugiat deserunt mollit officia magna ea pariatur. Ullamco proident in nostrud pariatur. Minim consequat pariatur id pariatur adipisicing.",
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
            review_body:
              "You have stumbled across an uncharted island rich in natural resources, but you are not alone; other adventurers have come ashore too, and the race to settle the island of Catan has begun! Whether you exert military force, build a road to rival the Great Wall, trade goods with ships from the outside world, or some combination of all three, the aim is the same: to dominate the island. Will you prevail? Proceed strategically, trade wisely, and may the odds be in favour.",
          },
        ]);
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
