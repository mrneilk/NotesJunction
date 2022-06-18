const express = require("express");
const {
  getNoteById,
  getNotes,
  CreateNote,
  UpdateNote,
  DeleteNote,
} = require("../controllers/notesController");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");

router.route("/").get(protect, getNotes);
router.route("/create").post(protect, CreateNote);
router
  .route("/:id")
  .get(getNoteById)
  .delete(protect, DeleteNote)
  .put(protect, UpdateNote);

module.exports = router;
