class Test {
    static async enqueue(test) {
        //do something to make a payload
        let payload = {
            firstName: test.firstName,
            sex: test.sex
        };

        await QueueTask.queue({
            taskType: 'TEST',
            payload: payload
        });
    }

    static async dequeue(queueTask) {
        let payload = queueTask.payload;

        /* handle the payload */
        console.log(payload.firstName);
    }
}

module.exports = Test;
