module.exports = [
    {
        type: 'TEST', // an identifier for you task
        queue: 'default', // the queue to handle the task.
        handler: 'Test.dequeue', // the handler of the tasks of this type
        description: 'any remarks you want to add'
    }
];
