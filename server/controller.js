module.exports = {
    getInventory (req, res) {
        const db = req.app.get('db')
        db.get_inventory()
        .then(result => {
            console.log(result)
            res.status(200).send(result)
        })
        .catch(err => {
            console.log(err)
        })
    }

    }
