const acounts = [
    {
        id: 1,
        username: "Huynh Ngoc phu",
        pass: '123456',
        phone : "0349090987",
        adress: "Hai Phong",
        dob : "12/06/1004",
        role: "0"

    },
    {
        id: 2,
        username: "tran van a",
        pass: '123456',
        phone : "0349090987",
        adress: "HCM",
        dob : "20/05/2001",
        role: "0"
    },
    {
        id: 3,
        username: "tran van E",
        pass: '123456',
        phone : "0349090987",
        adress: "Ha Noi",
        dob : "27/03/1999",
        role: "0"
    }, {
        id: 4,
        username: "tran van C",
        pass: '123456',
        phone : "0349090987",
        adress: "Quang nam",
        dob : "19/04/2000",
        role: "1"
    }
]


module.exports = {
    getAcounts:  (req, res, next) => {
        return res.status(200).json(acounts)
    },
    creatAcounts:(req, res, next) => {
        const body = req.body
        let id = Math.floor(Math.random() * 10)
        body.id = id
        acounts.push(body)
    
        return res.status(201).json(body)
    
    },
    updateAcounts :(req, res, next) => {
        const id = req.params.id
        const body = req.body
        const index = acounts.findIndex((v) => v.id === +id)
        const bodyUpdate = {
            ...acounts[index],
            ...body
        }
        acounts[index] = bodyUpdate
        return res.status(200).json(body)
    },
    deleteAcounts :(req, res, next) => {
        const id = req.params.id
        const index = acounts.findIndex((v) => v.id === +id)
        acounts.splice(index, 1)
        return res.status(200).json(
            {
                statusCode: 200,
                message: " Delete Thanh Cong"
            }
        )
    }
}