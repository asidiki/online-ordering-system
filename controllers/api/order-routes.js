const router = require('express').Router();
const { Order } = require('../../models');


router.get('/', (req, res) => {
    Order.findAll()
    .then(dbOrderData => res.json(dbOrderData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


router.get('/:id', (req, res) => {
    Order.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbOrderData => {
        if (!dbOrderData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.json(dbOrderData);
    })
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    
    Order.create({
        order_id: req.body.order_id,
        user_id: req.body.user_id,
        food_id: req.body.food_id,
        driver_id: req.body.driver_id
    })
        .then(dbOrderData => res.json(dbOrderData))
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
        });
});

module.exports = router;