class User extends MongooseModel {
    static schema() {
        return {
            title: { type: String },
            completed: { type: Boolean },
            company: { type: String }
        };
    }
}

module.exports = User;
