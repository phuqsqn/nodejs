const express = require("express");
const router = require("./routers");
const app = express();

app.set("view engine", 'ejs')
app.set("views", "./views")
app.use(express.static('./public'))
app.use(express.json())


router(app);

app.listen(2000, () => {
    console.log("thanh coong cong 3000")
})