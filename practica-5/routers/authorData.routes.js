const express = require("express");
const { searchAuthors, addAuthor, deleteAuthor } = require("../controllers/searchData");
const router = express.Router();

router.get("/api/data", searchAuthors);
router.post("/api/dataInsert",addAuthor);
router.post("/api/deleteData",deleteAuthor);

module.exports = router