const Product = require("../../models/Product");

const getProductsController = async (req, res) => {
    try {
        const products = await Product.find({});
        if (!products) {
            res.status(409).json({
                msg: "There's no products !",
            });
        }
        res.status(200).json({
            data: products,
        });
    } catch (err) {
        console.log(err);
    }
};

module.exports = getProductsController;
