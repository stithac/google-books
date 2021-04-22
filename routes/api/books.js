const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)

// Matches with "/api/books/:id"
router
  .route("/:id")
  .post(booksController.create);

module.exports = router;
