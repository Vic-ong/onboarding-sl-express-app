class UserController {
    async users(req, res) {
        let result;
        try {
            result = await User.get();
        } catch (err) {
            return res.status(500).json({
                error: err
            });
        }

        return res.status(200).json({
            users: result
        });
    }
}

module.exports = UserController;
