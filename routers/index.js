const acountsRouter = require("./acounts.router")
const categorysRouter = require("./category.router")

module.exports = (app) => {
    app.use("/api/acount", acountsRouter)
    app.use("/api/category", categorysRouter)
}
