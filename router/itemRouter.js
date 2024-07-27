const express = require('express');
const itemController = require("../controller/itemController");
const {
    uploadMultiple
} = require("../middleware/multer");
const router = express.Router();

router.post("/create", uploadMultiple, itemController.addItem);
// router.get("/read", bankController.viewBank);
// router.patch("/update/:id", uploadSingle, bankController.updateBank);
// router.delete("/delete/:id", bankController.deleteBank);

module.exports = router;