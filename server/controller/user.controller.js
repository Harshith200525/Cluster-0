const postNewUser = async (req, res) => {
    try {
        res.status(200).json(req.body);
    } catch (error) {
        res.status(400).send({ errMsg: error });
    }
};

module.exports = { postNewUser };
