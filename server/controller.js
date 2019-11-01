module.exports = {
    getInventory (req, res) {
        const db = req.app.get('db')
        db.get_inventory()
        .then(result => {
            // console.log(result)
            res.status(200).send(result)
        })
        .catch(err => {
            console.log(err)
        })
    },
    postProduct(req, res){
        const db = req.app.get('db')
        const {name, price, img} = req.body
        // console.log(name, price, img)
        db.post_product({
            name: name,
            price: price,
            img: img
        })
        .then(result => {
            // console.log(result)
            res.status(200).send(result)
        })
    },
    deletePost(req, res){
        const db = req.app.get('db')
        db.delete_product(req.params.id)
        .then(result => {
            // console.log(result)
            res.status(200).send(result)
        })
    }

    }
