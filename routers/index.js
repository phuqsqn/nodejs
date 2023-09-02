const acountsRouter = require("./acounts.router")
const categorysRouter = require("./category.router")

module.exports = (app) => {
    app.use("/api/accounts", acountsRouter)
    app.use("/api/categorys", categorysRouter)
}
