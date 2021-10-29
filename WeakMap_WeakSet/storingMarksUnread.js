read = new WeakSet();

function readAddMsg(obj) {
    read.add(obj);
};

function readHasMsg(obj) {
    let reading = read.has(obj);

    if (reading) {
        return `Прочитано!`;
    } else {
        return `Не прочитано!`;
    };
};

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

readAddMsg(messages[0]);

messages[0] = null;

console.log(readHasMsg(messages[0]));