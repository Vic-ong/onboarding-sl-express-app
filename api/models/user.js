// const extApi = require('./extApi.js');

class User extends MongooseModel {
    static schema() {
        return {
            title: { type: String },
            completed: { type: Boolean },
            company: { type: String }
        };
    }

    static async get() {
        const url = 'https://jsonplaceholder.typicode.com/todos';
        let users;

        users = await apiWrapper.get(url);

        if (!users) {
            throw new Error('request usersponse is null');
        } else {
            for (let i = 0; i < users.length; i++) {
                users[i].company = 'company A' + i;
            }
        }

        console.log(helpers.getCompany(users[10]));

        return users;
    }
}

module.exports = User;
