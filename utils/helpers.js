const { options } = require("../controllers")

module.exports = {
    ifCategory : (item, category, options) => {
        if (item.food_category === category) {
            return options.fn(this)
        } 
    }
}