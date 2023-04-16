const Product = require("../../models/Product");

const getSingleProductController = async (req, res) => {
    try {
        const { id } = req.params;
        const singleProduct = await Product.findOne({
            _id: id,
        });
        res.status(200).json(singleProduct);
    } catch (err) {
        console.log(err);
        res.status(501).json(err);
    }
};

module.exports = getSingleProductController;
