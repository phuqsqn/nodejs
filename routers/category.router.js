const express = require('express')
const router = express.Router()

const {
    getCategory,
    creatCategory,
    updateCategory,
    deleteCategory
} = require("../controllers/category.controller")
router
    .route("/")
    .get(getCategory)
    .post(creatCategory)
router
    .route("/:id")
    .patch(updateCategory)
    .delete(deleteCategory)
module.exports = router;