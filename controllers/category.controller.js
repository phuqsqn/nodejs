const category = [
    {
        id: 1,
        name: "Áo Thun",
        img: "https://salt.tikicdn.com/ts/product/24/9e/12/01c4b0443bb58592204dfb6c04514e8f.jpg"
    },
    {
        id: 2,
        name: "Quần Tây",
        img: "https://salt.tikicdn.com/ts/product/24/9e/12/01c4b0443bb58592204dfb6c04514e8f.jpg"
    },
    {
        id: 3,
        name: "Áo sơ mi",
        img: "https://salt.tikicdn.com/ts/product/24/9e/12/01c4b0443bb58592204dfb6c04514e8f.jpg"
    }
]
module.exports = {
    getCategory: (req, res, next) => {
        return res.status(200).json(category)
    },
    creatCategory: (req, res, next) => {
        const body = req.body
        let id = Math.floor(Math.random() * 10)
        body.id = id
        category.push(body)

        return res.status(201).json(body)

    },
    updateCategory: (req, res, next) => {
        const id = req.params.id
        const body = req.body
        const index = category.findIndex((v) => v.id === +id)
        const bodyUpdate = {
            ...category[index],
            ...body
        }
        category[index] = bodyUpdate
        return res.status(200).json(body)
    },
    deleteCategory: (req, res, next) => {
        const id = req.params.id
        const index = category.findIndex((v) => v.id === +id)
        category.splice(index, 1)
        return res.status(200).json(
            {
                statusCode: 200,
                message: " Delete Thanh Cong"
            }
        )
    }
}