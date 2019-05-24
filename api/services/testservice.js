const request = require('request');

const get = url => {
    return new Promise((resolve, reject) => {
        request(url, { json: true }, (err, res, body) => {
            if (err) reject(err);
            resolve(body);
        });
    });
};

module.exports = { get };
