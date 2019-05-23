class Test extends MongooseModel {
    static async enqueue(test) {
        //do something to make a payload
        let payload = {
            sound: test.sound,
            movement: test.movement
        };

        await QueueTask.queue({
            taskType: 'TEST',
            payload: payload
        });

        return payload;
    }

    static async dequeue(queueTask) {
        let payload = queueTask.payload;

        /* handle the payload */
        console.log(payload.sound);
    }
}

module.exports = Test;
