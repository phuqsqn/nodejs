const express = require('express')
const router = express.Router()

const {
    getAccount,
    updateAccount,
    creatAccount,
    deleteAccount

} = require("../controllers/acounts.controller")
router
    .route("/")
    .get(getAccount)
    .post(creatAccount);

router
    .route("/:id")
    .patch(updateAccount)
    .delete(deleteAccount)

module.exports = router;