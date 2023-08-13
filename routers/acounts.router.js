const express = require('express')
const router = express.Router()

const {
    getAcounts,
    updateAcounts,
    creatAcounts,
    deleteAcounts

} = require("../controllers/acounts.controller")
router
    .route("/")
    .get(getAcounts)
    .post(creatAcounts);

router
    .route("/:id")
    .patch(updateAcounts)
    .delete(deleteAcounts)

module.exports = router;