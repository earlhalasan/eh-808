const express = require("express");
const router = express.Router();
const loopCtrl = require("../../controllers/api/loops");

// GET /api/loops
router.get("/", loopCtrl.index);

// POST /api/loops
router.post("/newLoop", loopCtrl.create);

// POST /api/loops
router.put("/editLoop/:id", loopCtrl.editLoop);

// DELETE /api/loops/:id
router.delete("/deleteLoop/:id", loopCtrl.deleteLoop);

// GET /api/loops/:id
router.get("/:id", loopCtrl.show);

module.exports = router;
