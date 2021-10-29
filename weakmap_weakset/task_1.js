read = new WeakSet();

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

read.add(messages[0]);

messages[0] = null;

console.log(read.has(messages[0]));