module.exports = {
    preMiddlewares: ['* requestLog requestParseURLEncoded requestParseBody'],

    routes: [
        'GET / PublicController.index',
        'GET /helloworld PublicController.helloworld',

        'GET /users UserController.users'
    ],

    postMiddlewares: []
};
