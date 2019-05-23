class PublicContoller {
    async index(req, res) {
        const params = {
            sound: 'meow',
            movement: 'sleep'
        };

        try {
            await Test.enqueue(params);
        } catch (err) {
            return res.status(500).json({
                error: err
            });
        }

        return res.status(200).json({
            message: 'OK',
            params
        });
    }

    async helloworld(req, res) {
        return res.status(200).json({
            message: 'Hello woooooorld! Purr'
        });
    }
}

module.exports = PublicContoller;
